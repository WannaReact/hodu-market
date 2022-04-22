import mongoose from 'mongoose';
import { send } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';
import orderNumGen from 'lib/mongoose/orderNumGen';
import pagination from 'lib/mongoose/pagination';

const handler = createHandler(pagination);
const { Order } = mongoose.models;

handler.get(async (req, res) => {
  const {
    locals: {
      pagination: { skip, limit }
    }
  } = req;
  const orders = await Order.find(
    {},
    'orderNumber status user courier invoice addressee createdAt'
  )
    .populate('user', 'userName')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean()
    .exec();
  send(res, orders);
});

handler.post(async (req, res) => {
  const {
    body: { product, user, count, cost, addressee }
  } = req;
  const orderNumber = orderNumGen();
  await new Order({
    orderNumber,
    status: '결제완료',
    product,
    user,
    count,
    cost,
    addressee
  }).save();
  const order = await Order.findOne(
    { orderNumber },
    '-courier -invoice -updatedAt'
  )
    .lean()
    .exec();
  send(res, order);
});

export default handler;
