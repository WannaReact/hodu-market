import mongoose, { Schema } from 'mongoose';
import { COURIER_ENUM, ORDER_STATUS_ENUM } from '../constants';

export const OrderSchema = new Schema(
  {
    orderGroup: {
      type: Schema.Types.ObjectId,
      ref: 'OrderGroup',
      required: [true, '주문그룹ID가 입력되지 않았습니다.']
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '회원ID가 입력되지 않았습니다.']
    },
    status: {
      type: String,
      enum: {
        values: ORDER_STATUS_ENUM,
        message: '주문상태가 유효하지 않습니다.'
      },
      required: [true, '주문상태가 입력되지 않았습니다.']
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, '상품ID가 입력되지 않았습니다.']
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
      enum: {
        values: COURIER_ENUM,
        message: '택배사명이 유효하지 않습니다.'
      }
    },
    invoice: {
      type: Number
    }
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
