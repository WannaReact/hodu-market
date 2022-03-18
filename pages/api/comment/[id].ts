import Comment from 'models/Comment';
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
  const review = await Comment.findOne({ _id: id });
  success(res, review);
});

export default handler;
