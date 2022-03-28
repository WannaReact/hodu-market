import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User, Review, Product, Comment } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const review = await Review.findById(id).populate('comments');
  success(res, review);
});

handler.put(async (req, res) => {
  const {
    body: { rating, content, images },
    query: { id }
  } = req;
  await Review.findByIdAndUpdate(id, { rating, content, images });
  success(res);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const { productId, userId, comments } = await Review.findByIdAndDelete(id);
  await Promise.all([
    ...comments.map((commentId: String) =>
      Comment.findByIdAndDelete(commentId)
    ),
    Product.findByIdAndUpdate(productId, { $pull: { reviews: id } }),
    User.findByIdAndUpdate(userId, { $pull: { reviews: id } })
  ]);
  success(res);
});

export default handler;
