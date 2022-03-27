import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User, Coupon } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const coupon = await Coupon.findById(id);
  success(res, coupon);
});

handler.put(async (req, res) => {
  const {
    body: { isUsed, expiryDate },
    query: { id }
  } = req;
  await Coupon.findByIdAndUpdate(id, { isUsed, expiryDate });
  success(res);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const { userId } = await Coupon.findByIdAndDelete(id);
  await User.findByIdAndUpdate(userId, { $pull: { coupons: id } });
  success(res);
});

export default handler;
