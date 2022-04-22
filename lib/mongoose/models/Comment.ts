import mongoose, { Schema } from 'mongoose';

export const CommentSchema = new Schema(
  {
    review: {
      type: Schema.Types.ObjectId,
      ref: 'Review',
      required: [true, '리뷰ID가 입력되지 않았습니다.']
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '회원ID가 입력되지 않았습니다.']
    },
    content: {
      type: String,
      required: [true, '댓글 내용을 입력하세요.'],
      minlength: [10, '댓글 내용을 10자 이상 입력해야 합니다.'],
      maxlength: [150, '댓글 내용은 150자 이하까지 입력할 수 있습니다.']
    }
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Comment ||
  mongoose.model('Comment', CommentSchema);
