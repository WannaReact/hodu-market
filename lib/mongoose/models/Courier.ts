import mongoose, { Schema } from 'mongoose';

export const CourierSchema = new Schema({
  courierName: {
    type: String,
    unique: true,
    required: true,
    minlength: 2,
    maxlength: 10
  }
});

export default mongoose.models.Courier ||
  mongoose.model('Courier', CourierSchema);
