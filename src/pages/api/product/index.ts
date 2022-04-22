import mongoose from 'mongoose';
import { send } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Product } = mongoose.models;

handler.get(async (req, res) => {
  const {
    locals: {
      pagination: { skip, limit }
    }
  } = req;
  const products = await Product.find({}, '-updatedAt')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean()
    .exec();
  send(res, products);
});

handler.post(async (req, res) => {
  const {
    body: {
      productName,
      option,
      images,
      price,
      deliveryCharge,
      discountRate,
      stock,
      categories,
      description
    }
  } = req;
  const { _id } = await new Product({
    productName,
    option,
    images,
    price,
    deliveryCharge,
    discountRate,
    stock,
    categories,
    description
  }).save();
  const product = await Product.findById(_id, '-updatedAt')
    .sort({ createdAt: -1 })
    .lean()
    .exec();
  send(res, product);
});

export default handler;
