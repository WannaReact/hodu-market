import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User, Order } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const product = await Order.findById(id);
  success(res, product);
});

handler.put(async (req, res) => {
  const {
    body: { courierId, invoice },
    query: { id }
  } = req;
  await Order.findByIdAndUpdate(id, { courierId, invoice });
  success(res);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const { userId } = await Order.findByIdAndDelete(id);
  await User.findByIdAndUpdate(userId, { $pull: { orders: id } });
  success(res);
});

export default handler;
