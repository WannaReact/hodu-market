import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';
import pagination from 'lib/mongoose/middlewares/pagination';

const handler = createHandler(pagination);
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id },
    locals: {
      pagination: { skip, limit }
    }
  } = req;
  const { reviews, reviewCount } = await User.findById(id)
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
    .populate('reviewCount')
    .lean()
    .exec();
  send(res, { reviews, totalCount: reviewCount });
});

export default handler;
