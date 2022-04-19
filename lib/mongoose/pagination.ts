import { NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import { PassedRequest } from './mongoose';

export default (
  req: PassedRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const {
    query: { page = '0', limit = '10' }
  } = req;
  if (typeof page === 'string' && typeof limit === 'string') {
    req.pagination = {
      skip: Number(page) * Number(limit),
      limit: Number(limit)
    };
  }
  next();
};
