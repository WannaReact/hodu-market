import mongoose, { Schema } from 'mongoose';

export const CouponSchema = new Schema(
  {
    couponTypeId: {
      type: Schema.Types.ObjectId,
      ref: 'CouponType',
      required: [true, '쿠폰종류ID가 입력되지 않았습니다.']
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '회원ID가 입력되지 않았습니다.']
    },
    isUsed: {
      type: Boolean,
      required: [true, '쿠폰 사용 여부가 입력되지 않았습니다.']
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
