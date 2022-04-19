import { NextApiRequest } from 'next';

export declare global {
  var mongoose: any;
  var orderNumber: number[];
}

export declare interface PassedRequest extends NextApiRequest {
  pagination: {
    skip: number;
    limit: number;
  };
}
