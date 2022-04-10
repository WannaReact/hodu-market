import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Product } = mongoose.models;

handler.get(async (req, res) => {
  const products = await Product.find({});
  success(res, products);
});

handler.post(async (req, res) => {
  const {
    body: { productName, price, discount, stock, categories = [] }
  } = req;
  const product = await new Product({
    productName,
    price,
    discount,
    stock,
    categories
  }).save();
  success(res, product);
});

export default handler;
