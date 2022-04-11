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
  const coupon = await Coupon.findByIdAndUpdate(id, { isUsed, expiryDate });
  success(res, coupon);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const coupon = await Coupon.findByIdAndDelete(id);
  const { userId } = coupon;
  await User.findByIdAndUpdate(userId, { $pull: { coupons: id } });
  success(res, coupon);
});

export default handler;
