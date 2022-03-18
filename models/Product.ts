import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  productName: {
    type: String,
    unique: true,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  stock: {
    type: Number,
    required: true
  },
  image: String,
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
});

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
