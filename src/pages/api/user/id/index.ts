import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { email }
  } = req;
  const user = await User.findOne({ email }, 'userId -_id');
  success(res, user);
});

export default handler;
