import Review from 'models/Review';
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
  const review = await Review.findOne({ _id: id }).populate('comments');
  success(res, review);
});

export default handler;
