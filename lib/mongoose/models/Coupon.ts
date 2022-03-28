import mongoose, { Schema } from 'mongoose';

export const CouponSchema = new Schema(
  {
    couponTypeId: {
      type: Schema.Types.ObjectId,
      ref: 'CouponType',
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    isUsed: {
      type: Boolean,
      required: true
    },
    expiryDate: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.Coupon || mongoose.model('Coupon', CouponSchema);
