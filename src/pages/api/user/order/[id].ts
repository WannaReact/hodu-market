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
  const user = await User.findById(id)
    .populate({
      path: 'orders',
      populate: [
        {
          path: 'orderGroup',
          model: 'OrderGroup',
          select: 'orderNumber'
        },
        {
          path: 'product',
          model: 'Product',
          select: 'productName option images'
        }
      ],
      options: { skip, limit, sort: '-updatedAt' }
    })
    .lean()
    .exec();
  send(res, user.orders);
});

export default handler;
