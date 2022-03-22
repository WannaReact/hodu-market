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
  const { body } = req;
  const { productId, userId } = body ?? {};
  const { _id } = await new Inquiry(body).save();
  await Promise.all([
    productId &&
      Product.findByIdAndUpdate(productId, { $push: { inquiries: _id } }),
    userId && User.findByIdAndUpdate(userId, { $push: { inquiries: _id } })
  ]);
  success(res);
});

export default handler;
