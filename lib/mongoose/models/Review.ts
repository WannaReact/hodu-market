import mongoose, { Schema } from 'mongoose';
import { IMAGE_MATCH } from './constants';

export const ReviewSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      required: [true, '상품ID가 입력되지 않았습니다.']
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: [true, '회원ID가 입력되지 않았습니다.']
    },
    rating: {
      type: Number,
      required: [true, '평점을 입력하세요.'],
      min: [1, '평점이 유효하지 않습니다.'],
      max: [5, '평점이 유효하지 않습니다.']
    },
    content: {
      type: String,
      required: [true, '리뷰 내용을 입력하세요.'],
      minlength: [10, '리뷰 내용을 10자 이상 입력해야 합니다.'],
      maxlength: [1000, '리뷰 내용은 1000자 이하까지 입력할 수 있습니다.']
    },
    images: [
      {
        type: String,
        match: [IMAGE_MATCH, '이미지 주소가 유효하지 않습니다.']
      }
    ],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
