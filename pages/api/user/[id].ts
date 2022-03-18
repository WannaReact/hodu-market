import User from 'models/User';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  if (typeof id !== 'string') {
    return;
  }
  const user = await User.findOne({ _id: id }).populate('reviews');
  success(res, user);
});

export default handler;
