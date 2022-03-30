import mongoose from 'mongoose';
import { fail, success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User, Review, Comment } = mongoose.models;

handler.get(async (req, res) => {
  const reviews = await Comment.find({});
  success(res, reviews);
});

handler.post(async (req, res) => {
  const {
    body: { reviewId, userId, content }
  } = req;
  const doesIdExist = await User.exists({ _id: userId });
  if (doesIdExist) {
    const { _id } = await new Comment({ reviewId, userId, content }).save();
    await Review.findByIdAndUpdate(reviewId, { $push: { comments: _id } });
    success(res);
  } else {
    fail(res);
  }
});

export default handler;
