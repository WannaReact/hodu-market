import mongoose, { Schema } from 'mongoose';
import { KOREAN_NAME_MATCH } from '../constants';

export const OrderGroupSchema = new Schema(
  {
    orderNumber: {
      type: Number,
      unique: true,
      required: [true, '주문번호가 입력되지 않았습니다.']
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '회원ID가 입력되지 않았습니다.']
    },
    orderer: {
      type: String,
      required: [true, '주문자명을 입력하세요.'],
      match: [
        KOREAN_NAME_MATCH,
        '이름은 2 ~ 8자의 한글 조합으로 입력해야 합니다.'
      ]
    },
    addressee: {
      type: String,
      required: [true, '수령인을 입력하세요'],
      match: [
        KOREAN_NAME_MATCH,
        '이름은 2 ~ 8자의 한글 조합으로 입력해야 합니다.'
      ]
    },
    address: {
      type: {
        postalCode: Number,
        address1: String,
        address2: String
      },
      required: [true, '주소를 입력하세요']
    }
  },
  { timestamps: true, versionKey: false }
);

OrderGroupSchema.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'orderGroup'
});

export default mongoose.models.OrderGroup ||
  mongoose.model('OrderGroup', OrderGroupSchema);
