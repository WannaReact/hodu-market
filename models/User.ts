import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true
    },
    userName: {
      type: String,
      unique: true,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    money: {
      type: Number,
      default: 1000
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
