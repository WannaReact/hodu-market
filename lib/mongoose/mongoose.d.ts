import { NextApiRequest } from 'next';

export declare global {
  var mongoose: any;
  var orderNumber: number[];
}

export declare interface PassedRequest extends NextApiRequest {
  locals: {
    pagination: {
      skip: number;
      limit: number;
    };
  };
}
