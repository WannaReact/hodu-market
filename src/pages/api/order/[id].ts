import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';
import OrderGroup from 'lib/mongoose/models/OrderGroup';

const handler = createHandler();
const { User, Product, Order } = mongoose.models;

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
    body: { status, courier, invoice, orderer, addressee, address },
    query: { id }
  } = req;
  if (orderer || addressee || address) {
    const { orderGroup } = await Order.findById(id).lean().exec();
    await OrderGroup.findByIdAndUpdate(orderGroup, {
      orderer,
      addressee,
      address
    });
  }
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
    .select('-updatedAt')
    .populate('orderGroup', '-updatedAt')
    .lean()
    .exec();
  await Promise.all([
    Product.findByIdAndUpdate(order.product, {
      $inc: { stock: order.count }
    }),
    User.findByIdAndUpdate(order.orderGroup.user, {
      $inc: { money: order.cost }
    })
  ]);
  send(res, order);
});

export default handler;
