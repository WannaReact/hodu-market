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
  const { orders, orderCount } = await User.findById(id)
    .populate({
      path: 'orders',
      populate: [
        {
          path: 'orderGroup',
          model: 'OrderGroup',
          select: '-user -updatedAt'
        },
        {
          path: 'product',
          model: 'Product',
          select: 'productName option images'
        }
      ],
      options: { skip, limit, select: '-updatedAt', sort: '-createdAt' }
    })
    .populate('orderCount')
    .lean()
    .exec();
  send(res, { orders, totalCount: orderCount });
});

export default handler;
