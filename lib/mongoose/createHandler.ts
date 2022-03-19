import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect, { Middleware } from 'next-connect';
import dbConnect from './dbConnect';
import { fail } from './response';

export default (
  ...middleware: Middleware<NextApiRequest, NextApiResponse>[]
) => {
  return nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res) => {
      fail(res);
    },
    onNoMatch: (req, res) => {
      fail(res);
    }
  }).use(dbConnect, ...middleware);
};
