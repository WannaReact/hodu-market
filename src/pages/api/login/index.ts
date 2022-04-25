import mongoose from 'mongoose';
import createHandler from 'lib/mongoose/utils/createHandler';
import { send } from 'lib/mongoose/utils/response';

const handler = createHandler();
const { User } = mongoose.models;

handler.post(async (req, res) => {
  const {
    body: { userId, password }
  } = req;
  const user = await User.findOne({ userId });
  send(
    res,
    (await user?.checkPassword(password))
      ? { id: user._id, nickname: user.nickname }
      : null
  );
});

export default handler;
