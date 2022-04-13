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
    const comment = await new Comment({ reviewId, userId, content }).save();
    const { _id } = comment;
    await Review.findByIdAndUpdate(reviewId, { $push: { comments: _id } });
    success(res, comment);
  } else {
    fail(res, '회원ID가 유효하지 않습니다.');
  }
});

export default handler;
