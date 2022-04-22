import { NextApiResponse } from 'next';

export interface Response {
  success: boolean;
  message?: string | string[];
}

export interface Success extends Response {
  data: object;
}

export const success = (
  res: NextApiResponse<Response | Success>,
  data?: object
) => {
  res.json({ success: true, data });
};

export const fail = (
  res: NextApiResponse<Response | Success>,
  message?: string | string[]
) => {
  res.json({ success: false, message });
};

export const send = (
  res: NextApiResponse<Response | Success>,
  result: object | Array<object>
) => {
  if (result) {
    success(res, result);
  } else {
    fail(res, result);
  }
};
