import mongoose from 'mongoose';
import { send } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';
import pagination from 'lib/mongoose/pagination';

const handler = createHandler(pagination);
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id },
    locals: {
      pagination: { skip, limit }
    }
  } = req;
  const user = await User.findById(id)
    .populate({
      path: 'reviews',
      populate: {
        path: 'product',
        model: 'Product',
        select: 'productName option images'
      },
      select: 'product rating content images createdAt',
      options: { skip, limit, sort: { createdAt: -1 } }
    })
    .lean()
    .exec();
  send(res, user.reviews);
});

export default handler;
