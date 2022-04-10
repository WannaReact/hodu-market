import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Product, User, Inquiry } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const inquiry = await Inquiry.findById(id);
  success(res, inquiry);
});

handler.put(async (req, res) => {
  const {
    body: { content },
    query: { id }
  } = req;
  const inquiry = await Inquiry.findByIdAndUpdate(id, { content });
  success(res, inquiry);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const inquiry = await Inquiry.findByIdAndDelete(id);
  const { _id, productId, userId } = inquiry;
  await Promise.all([
    Product.findByIdAndUpdate(productId, { $pull: { inquiries: _id } }),
    User.findByIdAndUpdate(userId, { $pull: { inquiries: _id } })
  ]);
  success(res, inquiry);
});

export default handler;
