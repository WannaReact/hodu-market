import mongoose, { Schema } from 'mongoose';

export const InquirySchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    content: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500
    },
    answer: {
      type: String,
      maxlength: 500
    }
  },
  { timestamps: true }
);

export default mongoose.models.Inquiry ||
  mongoose.model('Inquiry', InquirySchema);
