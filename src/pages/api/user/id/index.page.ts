import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';

const handler = createHandler();
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { email }
  } = req;
  const user = await User.findOne({ email }, 'userId -_id').lean().exec();
  send(res, user);
});

export default handler;
