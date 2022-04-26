import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';

const handler = createHandler();
const { Comment } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const comment = await Comment.findById(id, '-updatedAt')
    .populate('user', 'nickname image')
    .lean()
    .exec();
  send(res, comment);
});

handler.put(async (req, res) => {
  const {
    query: { id },
    body: { content }
  } = req;
  const comment = await Comment.findByIdAndUpdate(
    id,
    { content },
    { new: true, select: '-updatedAt' }
  )
    .populate('user', 'nickname image')
    .lean()
    .exec();
  send(res, comment);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const comment = await Comment.findByIdAndDelete(id, { select: '-updatedAt' })
    .populate('user', 'nickname image')
    .lean()
    .exec();
  send(res, comment);
});

export default handler;
