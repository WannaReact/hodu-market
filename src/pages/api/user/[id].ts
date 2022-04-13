import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const user = await User.findById(id).populate('reviews');
  success(res, user);
});

handler.put(async (req, res) => {
  const {
    body: { userName, nickname, phone, email, image },
    query: { id }
  } = req;
  const user = await User.findByIdAndUpdate(id, {
    userName,
    nickname,
    phone,
    email,
    image
  });
  success(res, user);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const user = await User.findByIdAndDelete(id);
  success(res, user);
});

export default handler;
