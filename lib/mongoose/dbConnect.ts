import mongoose from 'mongoose';

interface Cache {
  conn: object | null;
  promise: object | null;
}

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error('환경 변수 MONGODB_URI 값이 올바르지 않습니다!');
}

const cache: Cache = { conn: null, promise: null };

export default async () => {
  if (cache.conn) {
    return cache.conn;
  }
  if (!cache.promise) {
    cache.promise = await mongoose.connect(MONGODB_URI);
  }
  cache.conn = await cache.promise;
  console.log('connected to database');
  return cache.conn;
};
