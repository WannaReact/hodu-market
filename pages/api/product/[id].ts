import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Review, Product, Inquiry } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const product = await Product.findById(id)
    .populate('reviews')
    .populate('inquiries');
  success(res, product);
});

handler.put(async (req, res) => {
  const {
    body: { productName, image, price, discount, stock },
    query: { id }
  } = req;
  await Product.findByIdAndUpdate(id, {
    productName,
    image,
    price,
    discount,
    stock
  });
  success(res);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const { reviews, inquiries } = await Product.findByIdAndDelete(id);
  await Promise.all([
    ...reviews.map((reviewId: String) => Review.findByIdAndDelete(reviewId)),
    ...inquiries.map((inquiryId: String) =>
      Inquiry.findByIdAndDelete(inquiryId)
    )
  ]);
  success(res);
});

export default handler;
