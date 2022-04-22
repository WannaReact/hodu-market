import { NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import { PassedRequest } from '../mongoose';

export default (
  req: PassedRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  req.locals = {
    pagination: {
      skip: 1,
      limit: 10
    }
  };
  next();
};
