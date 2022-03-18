import mongoose, { Schema } from 'mongoose';

const ReviewSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  images: [String],
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
