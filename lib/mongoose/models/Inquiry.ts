import mongoose, { Schema } from 'mongoose';

export const InquirySchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: [true, '상품ID가 입력되지 않았습니다.']
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: [true, '회원ID가 입력되지 않았습니다.']
    },
    content: {
      type: String,
      required: [true, '문의 내용을 입력하세요.'],
      minlength: [10, '문의 내용을 10자 이상 입력해야 합니다.'],
      maxlength: [500, '문의 내용은 500자 이하까지 입력할 수 있습니다.']
    },
    answer: {
      type: String,
      maxlength: [500, '문의 내용 답변은 500자 이하까지 입력할 수 있습니다.']
    }
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Inquiry ||
  mongoose.model('Inquiry', InquirySchema);
