import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Courier } = mongoose.models;

handler.get(async (req, res) => {
  const couriers = await Courier.find({});
  success(res, couriers);
});

handler.post(async (req, res) => {
  const { body } = req;
  await new Courier(body).save();
  success(res);
});

export default handler;
