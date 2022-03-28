import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User, Coupon } = mongoose.models;

handler.get(async (req, res) => {
  const coupon = await Coupon.find({});
  success(res, coupon);
});

handler.post(async (req, res) => {
  const { body } = req;
  const { userId } = body ?? {};
  const { _id } = await new Coupon(body).save();
  await User.findByIdAndUpdate(userId, { $push: { coupons: _id } });
  success(res);
});

export default handler;
