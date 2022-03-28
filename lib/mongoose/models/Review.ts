import mongoose, { Schema } from 'mongoose';
import { IMAGE_MATCH } from './constants';

export const ReviewSchema = new Schema(
  {
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
      required: true,
      min: 1,
      max: 5
    },
    content: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 1000
    },
    images: [
      {
        type: String,
        match: IMAGE_MATCH
      }
    ],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
);

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
