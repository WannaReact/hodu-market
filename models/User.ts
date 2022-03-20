import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true,
      match: /[a-z0-9_]{4,16}/
    },
    userName: {
      type: String,
      required: true,
      match: /[ㄱ-ㅎㅏ-ㅣ가-힣]{2,8}/
    },
    nickname: {
      type: String,
      unique: true,
      required: true,
      match: /[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,8}/
    },
    phone: {
      type: String,
      required: true,
      match: /^\d{3}-\d{3,4}-\d{4}$/
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match:
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
    },
    money: {
      type: Number,
      default: 1000,
      min: 0,
      max: Number.MAX_SAFE_INTEGER
    },
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    inquiries: [{ type: Schema.Types.ObjectId, ref: 'Inquiry' }],
    wishList: [{ type: Schema.Types.ObjectId, ref: 'WishList' }],
    coupons: [{ type: Schema.Types.ObjectId, ref: 'Coupon' }]
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model('User', UserSchema);
