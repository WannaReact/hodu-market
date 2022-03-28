import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Product, Category } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const category = await Category.findById(id).populate('products');
  success(res, category);
});

handler.put(async (req, res) => {
  const {
    body: { categoryName },
    query: { id }
  } = req;
  await Category.findByIdAndUpdate(id, { categoryName });
  success(res);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const { products } = await Category.findByIdAndDelete(id);
  await Promise.all(
    products.map((productId: string) =>
      Product.findByIdAndUpdate(productId, { $pull: { categories: id } })
    )
  );
  success(res);
});

export default handler;
