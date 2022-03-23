import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Review } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const review = await Review.findById(id).populate('comments');
  success(res, review);
});

handler.put(async (req, res) => {
  const {
    body: { rating, content, images },
    query: { id }
  } = req;
  await Review.findByIdAndUpdate(id, { rating, content, images });
  success(res);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  await Review.findByIdAndDelete(id);
  success(res);
});

export default handler;
