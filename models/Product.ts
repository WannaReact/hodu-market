import mongoose, { Schema } from 'mongoose';
import { DISCOUNT_MATCH, IMAGE_MATCH } from './constants';

export const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      unique: true,
      required: true,
      maxlength: 50
    },
    image: {
      type: String,
      match: IMAGE_MATCH
    },
    price: {
      type: Number,
      required: true,
      min: 0,
      max: 100_000_000
    },
    discount: {
      type: String,
      match: DISCOUNT_MATCH
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      max: 100_000_000
    },
    options: [{ type: Schema.Types.ObjectId, ref: 'Option' }],
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    inquiries: [{ type: Schema.Types.ObjectId, ref: 'Inquiry' }]
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
