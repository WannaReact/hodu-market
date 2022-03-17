import dbConnect from 'lib/mongoose/dbConnect';
import { fail, Response, success, Success } from 'lib/mongoose/response';
import User from 'models/User';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response | Success>
) {
  try {
    const { method } = req;
    await dbConnect();

    if (method === 'GET') {
      const users = await User.find({});
      success(res, users);
    } else if (method === 'POST') {
      const { body } = req;
      const duplicate = await User.findOne({ userId: body.userId });
      if (duplicate) {
        fail(res, '중복 아이디 존재');
      } else {
        await new User({ ...body }).save();
        success(res);
      }
    } else {
      fail(res);
    }
  } catch {
    fail(res);
  }
}
