import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Review, Product, Inquiry, Category } = mongoose.models;

handler.get(async (req, res) => {
  const products = await Product.find({});
  success(res, products);
});

handler.post(async (req, res) => {
  const { body } = req;
  const { reviewId, inquiryId, categories } = body ?? {};
  const categoryPromises = await Promise.allSettled(
    categories.map((categoryName: string) => Category.findOne({ categoryName }))
  );
  const categoryIds = categoryPromises
    .filter(({ value }: any) => value)
    .map(({ value: { _id } }: any) => _id);
  const { _id } = await new Product({
    ...body,
    categories: categoryIds
  }).save();
  await Promise.all([
    ...categoryIds.map((categoryId: string) =>
      Category.findByIdAndUpdate(categoryId, { $push: { products: _id } })
    ),
    reviewId && Review.findByIdAndUpdate(reviewId, { $push: { reviews: _id } }),
    inquiryId &&
      Inquiry.findByIdAndUpdate(inquiryId, { $push: { inquiries: _id } })
  ]);
  success(res);
});

export default handler;
