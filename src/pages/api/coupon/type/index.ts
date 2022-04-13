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
  const {
    body: { couponName, categories = [], maxPrice, discount }
  } = req;
  const couponType = await new CouponType({
    couponName,
    categories,
    maxPrice,
    discount
  }).save();
  success(res, couponType);
});

export default handler;
