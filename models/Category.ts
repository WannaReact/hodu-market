import mongoose, { Schema } from 'mongoose';

export const CategorySchema = new Schema(
  {
    categoryName: {
      type: String,
      unique: true,
      required: true,
      enum: [
        '원두',
        '싱글오리진',
        '블렌드',
        '생두',
        '디카페인',
        '커피팩',
        '캡슐커피',
        '콜드브루',
        '핸드드립용품',
        '커피추출용품',
        '머신',
        '기물',
        '위생용품',
        '허브차',
        '홍차',
        '아이스티',
        '농축액',
        '시럽',
        '에이드'
      ]
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
  },
  { timestamps: true }
);

export default mongoose.models.Category ||
  mongoose.model('Category', CategorySchema);
