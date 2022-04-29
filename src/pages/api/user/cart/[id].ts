import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';
import pagination from 'lib/mongoose/middlewares/pagination';

const handler = createHandler(pagination);
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const user = await User.findById(id)
    .populate({
      path: 'cart',
      populate: {
        path: 'product',
        model: 'Product',
        select: '-stock -description -createdAt -updatedAt'
      },
      select: '-updatedAt',
      options: {
        sort: { createdAt: -1 }
      }
    })
    .lean()
    .exec();
  send(res, user.cart);
});

export default handler;
