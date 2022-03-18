import { success } from 'lib/mongoose/response';
import User from 'models/User';
import createHandler from 'lib/mongoose/createHandler';
import mongoose from 'mongoose';

const handler = createHandler();

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  if (typeof id !== 'string') {
    return;
  }
  const user = await User.findOne({ _id: new mongoose.Types.ObjectId(id) });
  success(res, user);
});

export default handler;
