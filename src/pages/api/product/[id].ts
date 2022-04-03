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
    .populate('inquiries')
    .populate('categories');
  success(res, product);
});

handler.put(async (req, res) => {
  const {
    body: { productName, price, discount, stock, categories },
    query: { id }
  } = req;
  await Product.findByIdAndUpdate(id, {
    productName,
    price,
    discount,
    stock,
    categories
  });
  success(res);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const { reviews, inquiries } = await Product.findByIdAndDelete(id);
  await Promise.all([
    ...reviews.map((reviewId: string) => Review.findByIdAndDelete(reviewId)),
    ...inquiries.map((inquiryId: string) =>
      Inquiry.findByIdAndDelete(inquiryId)
    )
  ]);
  success(res);
});

export default handler;
