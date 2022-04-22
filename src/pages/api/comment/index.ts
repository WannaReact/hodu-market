import mongoose from 'mongoose';
import { send } from 'lib/mongoose/utils/response';
import createHandler from 'lib/mongoose/utils/createHandler';
import pagination from 'lib/mongoose/middlewares/pagination';

const handler = createHandler(pagination);
const { Comment } = mongoose.models;

handler.get(async (req, res) => {
  const {
    locals: {
      pagination: { skip, limit }
    }
  } = req;
  const comments = await Comment.find({}, '-updatedAt')
    .populate('user', 'nickname image')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean()
    .exec();
  send(res, comments);
});

handler.post(async (req, res) => {
  const {
    body: { review, user, content }
  } = req;
  const { _id } = await new Comment({ review, user, content }).save();
  const comment = await Comment.findById(_id, '-updatedAt')
    .populate('user', 'nickname image')
    .lean()
    .exec();
  send(res, comment);
});

export default handler;
