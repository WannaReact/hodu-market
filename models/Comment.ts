import mongoose, { Schema } from 'mongoose';

export const CommentSchema = new Schema({
  reviewId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

export default mongoose.models.Comment ||
  mongoose.model('Comment', CommentSchema);
