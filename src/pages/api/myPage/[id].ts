import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';

const handler = createHandler();
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const { unconfirmedOrders } = await User.findById(id)
    .populate('unconfirmedOrders')
    .lean()
    .exec();
  send(res, { order: unconfirmedOrders });
});

export default handler;
