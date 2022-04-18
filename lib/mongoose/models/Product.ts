import mongoose, { Schema } from 'mongoose';
import { CATEGORY_ENUM, DISCOUNT_MATCH, IMAGE_MATCH } from './constants';

export const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      unique: true,
      required: [true, '상품 이름을 입력하세요.'],
      maxlength: [50, '상품 이름은 50자 이하까지 입력할 수 있습니다.']
    },
    images: [
      {
        type: String,
        match: [IMAGE_MATCH, '이미지 주소가 유효하지 않습니다.']
      }
    ],
    price: {
      type: Number,
      required: [true, '가격을 입력하세요.'],
      min: [0, '가격이 유효하지 않습니다.'],
      max: [100_000_000, '가격이 유효하지 않습니다.']
    },
    discount: {
      type: String,
      match: [DISCOUNT_MATCH, '할인액 또는 할인율이 유효하지 않습니다.']
    },
    stock: {
      type: Number,
      required: [true, '재고량을 입력하세요.'],
      min: [0, '재고량이 유효하지 않습니다.'],
      max: [100_000_000, '재고량이 유효하지 않습니다.']
    },
    categories: {
      type: [
        {
          type: String,
          enum: {
            values: CATEGORY_ENUM,
            message: '카테고리가 유효하지 않습니다.'
          }
        }
      ],
      required: [true, '카테고리를 입력하세요.']
    },
    description: {
      type: String,
      required: [true, '상품 상세설명을 입력하세요.'],
      minlength: [10, '상품 상세설명을 10자 이상 입력해야 합니다.'],
      maxlength: [2000, '상품 상세설명은 2000자 이하까지 입력할 수 있습니다.']
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', unique: true }],
    inquiries: [{ type: Schema.Types.ObjectId, ref: 'Inquiry', unique: true }]
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
