import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { CouponType } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const couponType = await CouponType.findById(id);
  success(res, couponType);
});

handler.put(async (req, res) => {
  const {
    body: { couponName, categories = [], maxPrice, discount },
    query: { id }
  } = req;
  const couponType = await CouponType.findByIdAndUpdate(id, {
    couponName,
    categories,
    maxPrice,
    discount
  });
  success(res, couponType);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const couponType = await CouponType.findByIdAndDelete(id);
  success(res, couponType);
});

export default handler;
