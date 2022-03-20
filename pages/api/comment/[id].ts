import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Comment } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const review = await Comment.findById(id);
  success(res, review);
});

handler.put(async (req, res) => {
  const {
    body: { content },
    query: { id }
  } = req;
  await Comment.findByIdAndUpdate(id, { content });
  success(res);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  await Comment.findByIdAndDelete(id);
  success(res);
});

export default handler;
