import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const users = await User.find({});
  success(res, users);
});

handler.post(async (req, res) => {
  const {
    body: { userId, userName, nickname, phone, email }
  } = req;
  await new User({ userId, userName, nickname, phone, email }).save();
  success(res);
});

export default handler;
