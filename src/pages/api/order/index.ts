import mongoose from 'mongoose';
import { fail, success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';
import orderNumGen from 'lib/mongoose/orderNumGen';

const handler = createHandler();
const { User, Product, Order } = mongoose.models;

handler.get(async (req, res) => {
  const orders = await Order.find({});
  success(res, orders);
});

handler.post(async (req, res) => {
  const {
    body: { productId, userId, count, cost, courier, invoice, addressee }
  } = req;
  const doesIdExist = await Product.exists({ _id: productId });
  if (doesIdExist) {
    const order = await new Order({
      orderNumber: orderNumGen(),
      status: '결제완료',
      productId,
      userId,
      count,
      cost,
      courier,
      invoice,
      addressee
    }).save();
    const { _id } = order;
    await User.findByIdAndUpdate(userId, { $push: { options: _id } });
    success(res, order);
  } else {
    fail(res, '상품ID가 유효하지 않습니다.');
  }
});

export default handler;
