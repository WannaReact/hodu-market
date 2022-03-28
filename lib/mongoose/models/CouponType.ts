import mongoose, { Schema } from 'mongoose';
import { DISCOUNT_MATCH } from './constants';

export const CouponTypeSchema = new Schema(
  {
    couponName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    categories: {
      type: [Schema.Types.ObjectId],
      ref: 'Category'
    },
    maxPrice: {
      type: Number,
      min: 0,
      max: 100_000_000
    },
    discount: {
      type: String,
      required: true,
      match: DISCOUNT_MATCH
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.CouponType ||
  mongoose.model('CouponType', CouponTypeSchema);
