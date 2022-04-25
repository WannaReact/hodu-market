import mongoose from 'mongoose';
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
  const newUser = new User({
    userId,
    userName,
    nickname,
    phone,
    email
  });
  await newUser.setPassword(password);
  const { _id } = await newUser.save();
  const user = await User.findById(_id, '-password -cart -createdAt -updatedAt')
    .lean()
    .exec();
  send(res, user);
});

export default handler;
