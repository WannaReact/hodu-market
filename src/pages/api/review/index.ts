import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';
import pagination from 'lib/mongoose/middlewares/pagination';

const handler = createHandler(pagination);
const { Review } = mongoose.models;

handler.get(async (req, res) => {
  const {
    locals: {
      pagination: { skip, limit }
    }
  } = req;
  const reviews = await Review.find({}, '-updatedAt')
    .populate('product', 'productName option images')
    .populate('user', 'nickname')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean()
    .exec();
  send(res, reviews);
});

handler.post(async (req, res) => {
  const {
    body: { product, user, rating, content, images }
  } = req;
  const { _id } = await new Review({
    product,
    user,
    rating,
    content,
    images
  }).save();
  const review = await Review.findById(_id, '-updatedAt')
    .populate('product', 'productName option images')
    .populate('user', 'nickname')
    .lean()
    .exec();
  send(res, review);
});

export default handler;
