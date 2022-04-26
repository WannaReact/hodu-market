import { CustomJWT } from '@pages/api/auth/[...nextauth]';
import { NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { NextHandler } from 'next-connect';
import { PassedRequest } from '../mongoose';

export default async (
  req: PassedRequest,
  res: NextApiResponse,
  next: NextHandler
) => {
  const token = await getToken({ req });
  req.locals.token = token as CustomJWT | null;
  next();
};
