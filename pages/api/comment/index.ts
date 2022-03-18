import { success } from 'lib/mongoose/response';
import Comment from 'models/Comment';
import Review from 'models/Review';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();

handler.get(async (req, res) => {
  const reviews = await Comment.find({});
  success(res, reviews);
});

handler.post(async (req, res) => {
  const { body } = req;
  const { reviewId } = body ?? {};
  const { _id } = await new Comment({ ...body }).save();
  await Review.findOneAndUpdate(
    { _id: reviewId },
    { $push: { comments: _id } }
  );
  success(res);
});

export default handler;
