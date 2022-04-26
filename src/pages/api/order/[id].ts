import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';

const handler = createHandler();
const { Order } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const order = await Order.findById(id, '-product -count -cost -updatedAt')
    .populate('orderGroup', '-user -updatedAt')
    .lean()
    .exec();
  send(res, order);
});

handler.put(async (req, res) => {
  const {
    body: { status, courier, invoice },
    query: { id }
  } = req;
  const order = await Order.findByIdAndUpdate(
    id,
    {
      status,
      courier,
      invoice
    },
    { new: true }
  )
    .select('-product -count -cost -updatedAt')
    .populate('orderGroup', '-user -updatedAt')
    .lean()
    .exec();
  send(res, order);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const order = await Order.findByIdAndDelete(id)
    .select('-product -count -cost -updatedAt')
    .populate('orderGroup', '-user -updatedAt')
    .lean()
    .exec();
  send(res, order);
});

export default handler;
