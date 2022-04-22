import { NextApiResponse } from 'next';
import { NextHandler } from 'next-connect';
import { PassedRequest } from './mongoose';

export default (
  req: PassedRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const {
    query: { page, limit }
  } = req;
  const numPage = Number.isInteger(parseInt(page as string, 10))
    ? Math.abs(Number(page))
    : 1;
  const numLimit = Number.isInteger(parseInt(limit as string, 10))
    ? Math.abs(Number(limit))
    : 10;
  req.locals.pagination = {
    skip: (numPage - 1) * numLimit,
    limit: numLimit
  };
  next();
};
