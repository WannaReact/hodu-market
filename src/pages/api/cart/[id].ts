import mongoose from 'mongoose';
import { fail, success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const cart = await User.findById(id, 'cart -_id');
  success(res, cart);
});

handler.post(async (req, res) => {
  const {
    query: { id },
    body: { product, count }
  } = req;
  const user = await User.findByIdAndUpdate(
    id,
    {
      $push: { cart: { product, count } }
    },
    { new: true }
  );
  if (user) {
    success(res, user.cart);
  } else {
    fail(res);
  }
});

handler.put(async (req, res) => {
  const {
    query: { id },
    body: { product, count, itemId }
  } = req;
  const user = await User.findOneAndUpdate(
    { _id: id, 'cart._id': itemId },
    {
      $set: { 'cart.$.product': product, 'cart.$.count': count }
    },
    { new: true }
  );
  if (user) {
    success(res, user.cart);
  } else {
    fail(res);
  }
});

handler.delete(async (req, res) => {
  const {
    query: { id },
    body: { itemId }
  } = req;
  const user = await User.findByIdAndUpdate(
    id,
    {
      $pull: { cart: { _id: itemId } }
    },
    { new: true }
  );
  if (user) {
    success(res, user.cart);
  } else {
    fail(res);
  }
});

export default handler;
