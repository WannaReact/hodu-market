import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Product, User, Inquiry } = mongoose.models;

handler.get(async (req, res) => {
  const inquiries = await Inquiry.find({});
  success(res, inquiries);
});

handler.post(async (req, res) => {
  const {
    body: { productId, userId, content, answer }
  } = req;
  const { _id } = await new Inquiry({
    productId,
    userId,
    content,
    answer
  }).save();
  await Promise.all([
    Product.findByIdAndUpdate(productId, { $push: { inquiries: _id } }),
    User.findByIdAndUpdate(userId, { $push: { inquiries: _id } })
  ]);
  success(res);
});

export default handler;
