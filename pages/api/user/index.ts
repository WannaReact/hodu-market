import mongoose from 'mongoose';
import { fail, success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const users = await User.find({});
  success(res, users);
});

handler.post(async (req, res) => {
  const { body } = req;
  const duplicate =
    (await User.findOne({ userId: body.userId })) ||
    (await User.findOne({ userName: body.userName }));
  if (duplicate) {
    fail(res, '중복 아이디 존재');
  } else {
    await new User({ ...body }).save();
    success(res);
  }
});

export default handler;
