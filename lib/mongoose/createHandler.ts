import { CommentSchema } from 'models/Comment';
import { ProductSchema } from 'models/Product';
import { ReviewSchema } from 'models/Review';
import { UserSchema } from 'models/User';
import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect, { Middleware } from 'next-connect';
import dbConnect from './dbConnect';
import { fail } from './response';

export default (
  ...middleware: Middleware<NextApiRequest, NextApiResponse>[]
) => {
  mongoose.model('User', UserSchema);
  mongoose.model('Review', ReviewSchema);
  mongoose.model('Product', ProductSchema);
  mongoose.model('Comment', CommentSchema);
  return nextConnect<NextApiRequest, NextApiResponse>({
    onError: (err, req, res) => {
      fail(res);
    },
    onNoMatch: (req, res) => {
      fail(res);
    }
  }).use(dbConnect, ...middleware);
};
