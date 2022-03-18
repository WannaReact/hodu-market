import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';

const { MONGODB_URI } = process.env;

let cache: typeof mongoose | null = null;

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: Function
) => {
  if (!MONGODB_URI) {
    throw new Error('환경 변수 MONGODB_URI 값이 올바르지 않습니다!');
  }
  if (!cache) {
    cache = await mongoose.connect(MONGODB_URI);
  }
  return next();
};
