import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error('환경 변수 MONGODB_URI 값이 올바르지 않습니다!');
}

let cache: typeof mongoose | null = null;

export default async () => {
  if (!cache) {
    cache = await mongoose.connect(MONGODB_URI);
  }
  return cache;
};
