import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';

const handler = createHandler();
const { Order, Inquiry } = mongoose.models;

handler.get(async (req, res) => {
  const order = await Order.countDocuments({ status: '결제완료' });
  const inquiry = await Inquiry.countDocuments({ answer: { $exists: true } });
  send(res, { order, inquiry });
});

export default handler;
