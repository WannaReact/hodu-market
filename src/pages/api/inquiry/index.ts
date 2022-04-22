import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';

const handler = createHandler();
const { Inquiry } = mongoose.models;

handler.get(async (req, res) => {
  const {
    locals: {
      pagination: { skip, limit }
    }
  } = req;
  const inquiries = await Inquiry.find({}, '-updatedAt')
    .populate('product', 'productName option images')
    .populate('user', 'nickname')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean()
    .exec();
  send(res, inquiries);
});

handler.post(async (req, res) => {
  const {
    body: { product, user, content }
  } = req;
  const { _id } = await new Inquiry({
    product,
    user,
    content
  }).save();
  const inquiry = await Inquiry.findById(_id, '-updatedAt')
    .populate('product', 'productName option images')
    .populate('user', 'nickname')
    .lean()
    .exec();
  send(res, inquiry);
});

export default handler;
