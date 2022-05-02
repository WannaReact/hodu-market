import { CustomJWT } from '@pages/api/auth/[...nextauth].page';
import { NextApiRequest } from 'next';

export declare global {
  var mongoose: any;
  var orderNumber: number[];
}

export declare interface PassedRequest extends NextApiRequest {
  query: any;
  body: any;
  locals: {
    pagination: {
      skip: number;
      limit: number;
    };
    token: CustomJWT | null;
  };
}
