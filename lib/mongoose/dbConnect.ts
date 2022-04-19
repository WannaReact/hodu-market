import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import { CommentSchema } from './models/Comment';
import { ProductSchema } from './models/Product';
import { ReviewSchema } from './models/Review';
import { UserSchema } from './models/User';
import { InquirySchema } from './models/Inquiry';
import { OrderSchema } from './models/Order';

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
    global.mongoose = await mongoose.connect(MONGODB_URI);
    global.orderNumber = [...Array(100000)].map((_, i) => i);
    mongoose.model('User', UserSchema);
    mongoose.model('Review', ReviewSchema);
    mongoose.model('Product', ProductSchema);
    mongoose.model('Comment', CommentSchema);
    mongoose.model('Inquiry', InquirySchema);
    mongoose.model('Order', OrderSchema);
  }
  return next();
};
