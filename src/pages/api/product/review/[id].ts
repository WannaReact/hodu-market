import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';
import pagination from 'lib/mongoose/middlewares/pagination';

const handler = createHandler(pagination);
const { Product } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id },
    locals: {
      pagination: { skip, limit }
    }
  } = req;
  const product = await Product.findById(id)
    .populate({
      path: 'reviews',
      populate: {
        path: 'user',
        model: 'User',
        select: 'nickname image'
      },
      select: '-updatedAt',
      options: { skip, limit, sort: { createdAt: -1 } }
    })
    .lean()
    .exec();
  send(res, product.reviews);
});

export default handler;
