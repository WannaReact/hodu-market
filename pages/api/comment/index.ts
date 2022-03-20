import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Review, Comment } = mongoose.models;

handler.get(async (req, res) => {
  const reviews = await Comment.find({});
  success(res, reviews);
});

handler.post(async (req, res) => {
  const { body } = req;
  const { reviewId } = body ?? {};
  const { _id } = await new Comment(body).save();
  await Review.findByIdAndUpdate(reviewId, { $push: { comments: _id } });
  success(res);
});

export default handler;
