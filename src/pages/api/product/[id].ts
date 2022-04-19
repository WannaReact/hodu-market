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
    .populate({
      path: 'reviews',
      populate: {
        path: 'comments',
        model: 'Comment'
      }
    })
    .populate('inquiries')
    .populate('categories');
  success(res, product);
});

handler.put(async (req, res) => {
  const {
    body: { productName, images, price, discountRate, stock, categories },
    query: { id }
  } = req;
  const product = await Product.findByIdAndUpdate(id, {
    productName,
    images,
    price,
    discountRate,
    stock,
    categories
  });
  success(res, product);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const product = await Product.findByIdAndDelete(id);
  const { reviews, inquiries } = product;
  await Promise.all([
    ...reviews.map((reviewId: string) => Review.findByIdAndDelete(reviewId)),
    ...inquiries.map((inquiryId: string) =>
      Inquiry.findByIdAndDelete(inquiryId)
    )
  ]);
  success(res, product);
});

export default handler;
