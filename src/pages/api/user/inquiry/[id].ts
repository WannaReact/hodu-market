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
      path: 'inquiries',
      populate: {
        path: 'product',
        model: 'Product',
        select: 'productName option images'
      },
      select: '-updatedAt',
      options: { skip, limit, sort: { createdAt: -1 } }
    })
    .lean()
    .exec();
  send(res, user.inquiries);
});

export default handler;
