import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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
  order: Array,
  review: Array,
  inquiry: Array,
  wishList: Array,
  coupon: Array
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
