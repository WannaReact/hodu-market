import mongoose from 'mongoose';
import { send } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';
import pagination from 'lib/mongoose/pagination';

const handler = createHandler(pagination);
const { Review } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id },
    locals: {
      pagination: { skip, limit }
    }
  } = req;
  const review = await Review.findById(id, 'comments')
    .populate({
      path: 'comments',
      populate: {
        path: 'user',
        model: 'User',
        select: 'nickname image'
      },
      select: 'user content createdAt',
      options: { skip, limit }
    })
    .lean()
    .exec();
  send(res, review.comments);
});

export default handler;
