import mongoose from 'mongoose';
import { fail, send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';
import orderNumGen from 'lib/mongoose/utils/orderNumGen';
import pagination from 'lib/mongoose/middlewares/pagination';
import User from 'lib/mongoose/models/User';

const handler = createHandler(pagination);
const { Product, Order, OrderGroup } = mongoose.models;

handler.get(async (req, res) => {
  const {
    locals: {
      pagination: { skip, limit }
    }
  } = req;
  const orders = await Order.find(
    {},
    'orderGroup status courier invoice createdAt'
  )
    .populate('orderGroup', 'orderNumber orderer addressee')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean()
    .exec();
  send(res, orders);
});

handler.post(async (req, res) => {
  const {
    body: { user, orderer, addressee, address, products }
  } = req;
  const orderNumber = orderNumGen();
  const { _id } = await new OrderGroup({
    orderNumber,
    user,
    orderer,
    address,
    addressee
  }).save();
  const results = await Promise.allSettled(
    products.map(
      async ({ product, count }: { product: string; count: number }) => {
        const prd = await Product.findById(product)
          .select('productName stock')
          .lean()
          .exec();
        if (prd.stock < count) {
          return prd.productName;
        }
        return false;
      }
    )
  );
  if (results.some(({ status }) => status === 'rejected')) {
    fail(res, '주문 과정에서 오류가 발생하였습니다!');
  } else if (
    results.every((result) => result.status === 'fulfilled' && !result.value)
  ) {
    await Promise.all(
      products.map(
        async ({
          product,
          count,
          cost
        }: {
          product: string;
          count: number;
          cost: number;
        }) =>
          new Order({
            orderGroup: _id,
            user,
            status: '결제완료',
            product,
            count,
            cost
          }).save()
      )
    );
    const totalCost = products.reduce(
      (acc: number, { cost }: { cost: number }) => acc + cost,
      0
    );
    const { money } = await User.findById(user).lean().exec();
    if (money < totalCost) {
      fail(res, '포인트가 부족합니다.');
    } else {
      await Promise.all([
        User.findByIdAndUpdate(user, {
          $inc: { money: -totalCost }
        }),
        ...products.map(
          ({ product, count }: { product: string; count: number }) =>
            Product.findByIdAndUpdate(product, { $inc: { stock: -count } })
        )
      ]);
      const order = await OrderGroup.findById(_id, '-user -updatedAt')
        .populate('orders', 'orderGroup status count cost createdAt')
        .lean()
        .exec();
      send(res, order);
    }
  } else {
    fail(
      res,
      `${results
        .filter((result) => result.status === 'fulfilled' && result.value)
        .map((result) => (result as PromiseFulfilledResult<string>).value)
        .join(', ')}의 재고가 부족합니다!`
    );
  }
});

export default handler;
