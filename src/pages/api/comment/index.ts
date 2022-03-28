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
  const {
    body: { reviewId, userId, content }
  } = req;
  const { _id } = await new Comment({ reviewId, userId, content }).save();
  await Review.findByIdAndUpdate(reviewId, { $push: { comments: _id } });
  success(res);
});

export default handler;
