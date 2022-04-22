import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';

const handler = createHandler();
const { CartItem } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const cartItem = await CartItem.findById(id, '-updatedAt')
    .populate('product', '-stock -description -createdAt -updatedAt')
    .lean()
    .exec();
  send(res, cartItem);
});

handler.put(async (req, res) => {
  const {
    query: { id },
    body: { count }
  } = req;
  const cartItem = await CartItem.findByIdAndUpdate(
    id,
    { count },
    { new: true, select: '-updatedAt' }
  )
    .populate('product', '-stock -description -createdAt -updatedAt')
    .lean()
    .exec();
  send(res, cartItem);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const cartItem = await CartItem.findByIdAndDelete(id, {
    select: '-updatedAt'
  })
    .populate('product', '-stock -description -createdAt -updatedAt')
    .lean()
    .exec();
  send(res, cartItem);
});

export default handler;
