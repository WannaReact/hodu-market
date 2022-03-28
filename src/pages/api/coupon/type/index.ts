import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { CouponType } = mongoose.models;

handler.get(async (req, res) => {
  const couponType = await CouponType.find({});
  success(res, couponType);
});

handler.post(async (req, res) => {
  const { body } = req;
  await new CouponType(body).save();
  success(res);
});

export default handler;
