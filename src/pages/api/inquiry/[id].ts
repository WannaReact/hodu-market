import mongoose from 'mongoose';
import { send } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Inquiry } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const inquiry = await Inquiry.findById(id, '-updatedAt')
    .populate('product', 'productName option images')
    .populate('user', 'nickname')
    .lean()
    .exec();
  send(res, inquiry);
});

handler.put(async (req, res) => {
  const {
    query: { id },
    body: { content }
  } = req;
  const inquiry = await Inquiry.findByIdAndUpdate(
    id,
    { content },
    { new: true, select: '-updatedAt' }
  )
    .populate('product', 'productName option images')
    .populate('user', 'nickname')
    .lean()
    .exec();
  send(res, inquiry);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const inquiry = await Inquiry.findByIdAndDelete(id, { select: '-updatedAt' })
    .populate('product', 'productName option images')
    .populate('user', 'nickname')
    .lean()
    .exec();
  send(res, inquiry);
});

export default handler;
