import mongoose, { Schema } from 'mongoose';

export const CartItemSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '회원ID가 입력되지 않았습니다.']
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, '상품ID가 입력되지 않았습니다.']
    },
    count: {
      type: Number,
      required: [true, '수량이 입려되지 않았습니다.'],
      min: [1, '수량은 1개 이상이어야 합니다.'],
      max: [99, '수량은 99개 이하여야 합니다.']
    }
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.CartItem ||
  mongoose.model('CartItem', CartItemSchema);
