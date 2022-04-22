import mongoose, { Schema } from 'mongoose';
import { IMAGE_MATCH, KOREAN_NAME_MATCH } from '../constants';

export const UserSchema = new Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: [true, '아이디를 입력하세요.'],
      match: [
        /[a-z0-9_]{4,16}/,
        '아이디는 4 ~ 16자의 영문 소문자, 숫자, _ 조합으로 입력해야 합니다.'
      ]
    },
    password: {
      type: String,
      required: [true, '비밀번호를 입력하세요.']
    },
    userName: {
      type: String,
      required: [true, '이름을 입력하세요.'],
      match: [
        KOREAN_NAME_MATCH,
        '이름은 2 ~ 8자의 한글 조합으로 입력해야 합니다.'
      ]
    },
    nickname: {
      type: String,
      unique: true,
      required: [true, '닉네임을 입력하세요.'],
      match: [
        /[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,8}/,
        '닉네임은 2 ~ 8자의 영문 또는 한글 조합으로 입력해야 합니다.'
      ]
    },
    phone: {
      type: String,
      required: [true, '전화번호를 입력하세요.'],
      match: [/^\d{3}-\d{3,4}-\d{4}$/, '전화번호 형식에 맞게 입력해야 합니다.']
    },
    email: {
      type: String,
      unique: true,
      required: [true, '이메일을 입력하세요.'],
      match: [
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
        '이메일 형식에 맞게 입력해야 합니다.'
      ]
    },
    address: {
      postalCode: Number,
      address1: String,
      address2: String
    },
    image: {
      type: String,
      match: [IMAGE_MATCH, '이미지 주소가 유효하지 않습니다.']
    },
    money: {
      type: Number,
      default: 1000,
      min: [0, '보유 금액이 유효하지 않습니다.'],
      max: [Number.MAX_SAFE_INTEGER, '보유 금액이 유효하지 않습니다.']
    }
  },
  { timestamps: true, versionKey: false, toJSON: { virtuals: true } }
);

UserSchema.virtual('cart', {
  ref: 'CartItem',
  localField: '_id',
  foreignField: 'user'
});

UserSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'user'
});

UserSchema.virtual('inquiries', {
  ref: 'Inquiry',
  localField: '_id',
  foreignField: 'user'
});

UserSchema.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'user'
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
