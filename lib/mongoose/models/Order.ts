import mongoose, { Schema } from 'mongoose';
import { COURIER_ENUM, KOREAN_NAME_MATCH } from './constants';

export const OrderSchema = new Schema(
  {
    orderNumber: {
      type: Number,
      unique: true,
      required: [true, '주문번호가 입력되지 않았습니다.']
    },
    productId: {
      type: Schema.Types.ObjectId,
      required: [true, '상품ID가 입력되지 않았습니다.']
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: [true, '회원ID가 입력되지 않았습니다.']
    },
    couponId: {
      type: Schema.Types.ObjectId
    },
    count: {
      type: Number,
      required: [true, '수량을 입력하세요.'],
      min: 1,
      max: 99
    },
    cost: {
      type: Number,
      required: [true, '가격을 입력하세요.'],
      min: [0, '가격이 유효하지 않습니다.'],
      max: [100_000_000, '가격이 유효하지 않습니다.']
    },
    courier: {
      type: String,
      enum: [COURIER_ENUM, '택배사명이 유효하지 않습니다.']
    },
    invoice: {
      type: Number
    },
    addressee: {
      type: String,
      match: [
        KOREAN_NAME_MATCH,
        '이름은 2 ~ 8자의 한글 조합으로 입력해야 합니다.'
      ]
    }
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
