import dbConnect from 'lib/mongoose/dbConnect';
import { fail, Response, success, Success } from 'lib/mongoose/response';
import User from 'models/User';
import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response | Success>
) {
  try {
    const { method, query } = req;
    const { id } = query;
    if (typeof id !== 'string') {
      return;
    }
    await dbConnect();

    if (method === 'GET') {
      const user = await User.findOne({ _id: new mongoose.Types.ObjectId(id) });
      success(res, user);
    } else {
      fail(res);
    }
  } catch {
    fail(res);
  }
}
