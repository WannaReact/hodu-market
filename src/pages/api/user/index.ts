import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import createHandler from 'lib/mongoose/utils/createHandler';
import { send } from 'lib/mongoose/utils/response';

const handler = createHandler();
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const users = await User.find({}, '-cart -createdAt -updatedAt')
    .lean()
    .exec();
  send(res, users);
});

handler.post(async (req, res) => {
  const {
    body: { userId, password, userName, nickname, phone, email }
  } = req;
  const { _id } = await new User({
    userId,
    password: await bcrypt.hash(password, 10),
    userName,
    nickname,
    phone,
    email
  }).save();
  const user = await User.findById(_id, '-password -cart -createdAt -updatedAt')
    .lean()
    .exec();
  send(res, user);
});

export default handler;
