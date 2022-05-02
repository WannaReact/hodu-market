import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import { UserSchema } from '../models/User';
import { CartItemSchema } from '../models/CartItem';
import { ReviewSchema } from '../models/Review';
import { ProductSchema } from '../models/Product';
import { CommentSchema } from '../models/Comment';
import { InquirySchema } from '../models/Inquiry';
import { OrderSchema } from '../models/Order';
import { OrderGroupSchema } from '../models/OrderGroup';

const { MONGODB_URI } = process.env;

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  if (!MONGODB_URI) {
    throw new Error('환경 변수 MONGODB_URI 값이 올바르지 않습니다!');
  }

  if (!global.mongoose) {
    global.mongoose = await mongoose.connect(MONGODB_URI, (err) => {
      if (err) {
        console.log('mongoDB 연결 실패');
        console.log(err);
      } else {
        console.log('mongoDB 연결 성공!');
      }
    });
    global.orderNumber = [...Array(100000)].map((_, i) => i);
    mongoose.model('User', UserSchema);
    mongoose.model('CartItem', CartItemSchema);
    mongoose.model('Review', ReviewSchema);
    mongoose.model('Product', ProductSchema);
    mongoose.model('Comment', CommentSchema);
    mongoose.model('Inquiry', InquirySchema);
    mongoose.model('Order', OrderSchema);
    mongoose.model('OrderGroup', OrderGroupSchema);
  }
  return next();
};
