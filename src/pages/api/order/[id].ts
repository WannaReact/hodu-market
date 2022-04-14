import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User, Order } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const {
    _doc: { productId: product, userId: user, couponId: coupon, ...others }
  } = await Order.findById(id)
    .populate('productId')
    .populate('userId')
    .populate('couponId');
  success(res, { product, user, coupon, ...others });
});

handler.put(async (req, res) => {
  const {
    body: { status, courier, invoice },
    query: { id }
  } = req;
  const order = await Order.findByIdAndUpdate(id, { status, courier, invoice });
  success(res, order);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const order = await Order.findByIdAndDelete(id);
  const { userId } = order;
  await User.findByIdAndUpdate(userId, { $pull: { orders: id } });
  success(res, order);
});

export default handler;
