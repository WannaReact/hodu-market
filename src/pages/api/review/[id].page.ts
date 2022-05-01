import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';

const handler = createHandler();
const { Review } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const review = await Review.findById(id, '-updatedAt')
    .populate('product', 'productName option images')
    .populate('user', 'nickname')
    .lean()
    .exec();
  send(res, review);
});

handler.put(async (req, res) => {
  const {
    query: { id },
    body: { rating, content, images }
  } = req;
  const review = await Review.findByIdAndUpdate(
    id,
    {
      rating,
      content,
      images
    },
    {
      new: true,
      select: 'rating content images'
    }
  )
    .lean()
    .exec();
  send(res, review);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const review = await Review.findByIdAndDelete(id, {
    select: '-updatedAt'
  })
    .populate('product', 'productName option images')
    .populate('user', 'nickname')
    .lean()
    .exec();
  send(res, review);
});

export default handler;
