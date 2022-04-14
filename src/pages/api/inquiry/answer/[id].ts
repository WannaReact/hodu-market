import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Inquiry } = mongoose.models;

handler.put(async (req, res) => {
  const {
    body: { answer },
    query: { id }
  } = req;
  const inquiry = await Inquiry.findByIdAndUpdate(id, { answer });
  success(res, inquiry);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const inquiry = await Inquiry.findByIdAndUpdate(id, {
    $unset: { answer: 1 }
  });
  success(res, inquiry);
});

export default handler;
