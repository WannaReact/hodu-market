import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Review, Product, Inquiry, Category } = mongoose.models;

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
    body: { productName, price, discount, stock, categories = [] },
    query: { id }
  } = req;
  const categoryPromises = await Promise.allSettled(
    categories.map((categoryName: string) => Category.findOne({ categoryName }))
  );
  const categoryIds = categoryPromises
    .filter(({ value }: any) => value)
    .map(({ value: { _id } }: any) => _id.toString());
  const { categories: prevCategories } = await Product.findById(id);
  const newCategories = categoryIds.filter(
    (category: string) => !prevCategories.includes(category)
  );
  const deletedCategories = prevCategories
    .map((_id: mongoose.Types.ObjectId) => _id.toString())
    .filter((category: string) => !categoryIds.includes(category));
  await Promise.all([
    Product.findByIdAndUpdate(id, {
      productName,
      price,
      discount,
      stock,
      categories: categoryIds
    }),
    ...newCategories.map((categoryId) =>
      Category.findByIdAndUpdate(categoryId, { $push: { products: id } })
    ),
    ...deletedCategories.map((categoryId: string) =>
      Category.findByIdAndUpdate(categoryId, { $pull: { products: id } })
    )
  ]);
  success(res);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const { reviews, inquiries, categories } = await Product.findByIdAndDelete(
    id
  );
  await Promise.all([
    ...reviews.map((reviewId: string) => Review.findByIdAndDelete(reviewId)),
    ...inquiries.map((inquiryId: string) =>
      Inquiry.findByIdAndDelete(inquiryId)
    ),
    ...categories.map((categoryId: string) =>
      Category.findByIdAndUpdate(categoryId, { $pull: { products: id } })
    )
  ]);
  success(res);
});

export default handler;
