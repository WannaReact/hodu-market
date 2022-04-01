import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Courier } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { name }
  } = req;
  const courier = await Courier.findOne({ courierName: name });
  success(res, courier);
});

handler.put(async (req, res) => {
  const {
    body,
    query: { name }
  } = req;
  await Courier.findOneAndUpdate({ courierName: name }, body);
  success(res);
});

handler.delete(async (req, res) => {
  const {
    query: { name }
  } = req;
  await Courier.findOneAndDelete({ courierName: name });
  success(res);
});

export default handler;
