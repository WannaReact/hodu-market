import mongoose, { Schema } from 'mongoose';
import { DISCOUNT_MATCH } from './constants';

export const CouponTypeSchema = new Schema(
  {
    couponName: {
      type: String,
      required: [true, '쿠폰 이름을 입력하세요'],
      minlength: [2, '쿠폰 이름을 2자 이상 입력해야 합니다.'],
      maxlength: [50, '쿠폰 이름은 50자 이하까지 입력할 수 있습니다.']
    },
    categories: {
      type: [Schema.Types.ObjectId],
      ref: 'Category'
    },
    maxPrice: {
      type: Number,
      min: [0, '쿠폰 적용 상품의 가격 상한이 유효하지 않습니다.'],
      max: [100_000_000, '쿠폰 적용 상품의 가격 상한이 유효하지 않습니다.']
    },
    discount: {
      type: String,
      required: [true, '할인액 또는 할인율을 입력하세요.'],
      match: [DISCOUNT_MATCH, '할인액 또는 할인율이 유효하지 않습니다.']
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.models.CouponType ||
  mongoose.model('CouponType', CouponTypeSchema);
