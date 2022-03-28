import mongoose, { Schema } from 'mongoose';
import { KOREAN_NAME_MATCH } from './constants';

export const OrderSchema = new Schema(
  {
    orderNumber: {
      type: Number,
      unique: true,
      required: true
    },
    productId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    couponId: {
      type: Schema.Types.ObjectId
    },
    count: {
      type: Number,
      required: true,
      min: 1,
      max: 99
    },
    cost: {
      type: Number,
      required: true,
      min: 0,
      max: 100_000_000
    },
    courierId: {
      type: Schema.Types.ObjectId
    },
    invoice: {
      type: Number
    },
    addressee: {
      type: String,
      match: KOREAN_NAME_MATCH
    }
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
