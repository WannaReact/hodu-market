import mongoose from 'mongoose';
import { fail, send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';
import orderNumGen from 'lib/mongoose/utils/orderNumGen';
import pagination from 'lib/mongoose/middlewares/pagination';
import User from 'lib/mongoose/models/User';

const handler = createHandler(pagination);
const { Order, OrderGroup } = mongoose.models;

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
  const { money } = await User.findByIdAndUpdate(user, {
    $inc: { money: -totalCost }
  });
  if (money < totalCost) {
    await User.findByIdAndUpdate(user, { money });
    fail(res, '포인트가 부족합니다.');
  } else {
    const order = await OrderGroup.findById(_id, '-user -updatedAt')
      .populate('orders', 'orderGroup status count cost createdAt')
      .lean()
      .exec();
    send(res, order);
  }
});

export default handler;
