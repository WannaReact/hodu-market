import mongoose from 'mongoose';
import { send } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { CartItem } = mongoose.models;
handler.get(async (req, res) => {
  const cartItem = await CartItem.find({}, '-updatedAt').lean().exec();
  send(res, cartItem);
});

handler.post(async (req, res) => {
  const {
    body: { user, product, count }
  } = req;
  const { _id } = await new CartItem({ user, product, count }).save();
  const cartItem = await CartItem.findById(_id, '-updatedAt').lean().exec();
  send(res, cartItem);
});

export default handler;
