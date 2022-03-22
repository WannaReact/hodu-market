import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Review, Product, Inquiry } = mongoose.models;

handler.get(async (req, res) => {
  const products = await Product.find({});
  success(res, products);
});

handler.post(async (req, res) => {
  const { body } = req;
  const { reviewId, inquiryId } = body ?? {};
  const { _id } = await new Product(body).save();
  await Promise.all([
    reviewId && Review.findByIdAndUpdate(reviewId, { $push: { reviews: _id } }),
    inquiryId &&
      Inquiry.findByIdAndUpdate(inquiryId, { $push: { inquiries: _id } })
  ]);
  success(res);
});

export default handler;
