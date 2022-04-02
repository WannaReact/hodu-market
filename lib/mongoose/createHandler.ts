import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect, { Middleware } from 'next-connect';
import dbConnect from './dbConnect';
import { fail } from './response';

export default (
  ...middleware: Middleware<NextApiRequest, NextApiResponse>[]
) => {
  return nextConnect<NextApiRequest, NextApiResponse>({
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
      fail(res);
    }
  }).use(dbConnect, ...middleware);
};
