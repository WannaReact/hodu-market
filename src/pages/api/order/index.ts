import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';
import orderNumGen from 'lib/mongoose/orderNumGen';

const handler = createHandler();
const { User, Order } = mongoose.models;

handler.get(async (req, res) => {
  const orders = await Order.find({});
  success(res, orders);
});

handler.post(async (req, res) => {
  const { body } = req;
  const { userId } = body ?? {};
  const { _id } = await new Order({
    ...body,
    orderNumber: orderNumGen()
  }).save();
  await User.findByIdAndUpdate(userId, { $push: { options: _id } });
  success(res);
});

export default handler;
