import { NextApiResponse } from 'next';
import nextConnect, { Middleware } from 'next-connect';
import dbConnect from './dbConnect';
import { PassedRequest } from './mongoose';
import { fail } from './response';

export default (
  ...middleware: Middleware<PassedRequest, NextApiResponse>[]
) => {
  return nextConnect<PassedRequest, NextApiResponse>({
    onError: (err, req, res) => {
      if (err.name === 'MongoServerError' && err.code === 11000) {
        fail(res, '데이터 중복 오류');
      } else if (err.name === 'CastError') {
        fail(res, '데이터 타입 오류');
      } else {
        const message = Object.values(err.errors).map(
          (error: any) => error.message
        );
        fail(res, message.length === 1 ? message[0] : message);
      }
    },
    onNoMatch: (req, res) => {
      fail(res, '유효하지 않은 요청입니다.');
    }
  }).use(dbConnect, ...middleware);
};
