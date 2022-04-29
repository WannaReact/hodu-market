export interface IUser {
  _id: string;
  userId: string;
  userName: string;
  nickname: string;
  email: string;
  phone: string;
  money: number;
  createdAt: string;
}

export interface IProduct {
  _id: string;
  productName: string;
  option: string;
  images: string[];
  price: number;
  deliveryCharge: number;
  discountRate: number;
  stock: number;
  categories: string[];
  description: string;
  createdAt: string;
}

export interface IReview {
  _id: string;
  product: {
    _id: string;
    productName: string;
    images: string[];
    option: string;
  };
  user: {
    _id: string;
    nickname: string;
  };
  rating: number;
  images: string[];
  content: string;
  createdAt: string;
}

export interface IComment {
  _id: string;
  user: {
    _id: string;
    nickname: string;
  };
  review: string;
  content: string;
  createdAt: string;
}

export interface IInquiry {
  _id: string;
  product: {
    _id: string;
    productName: string;
    images: string[];
    option: string;
  };
  user: {
    _id: string;
    nickname: string;
  };
  content: string;
  answer?: string;
  createdAt: string;
  updatedAt?: string; // 답변 등록하면 이게 나와야 함.
}

export interface IMyOrder {
  _id: string;
  user: string;
  status: string;
  cost: number;
  count: number;
  orderGroup: {
    _id: string;
    orderNumber: number;
    deliveryCharge: number;
    orderer: string;
    addressee: string;
    address: {
      postalCode: number;
      address1: string;
      address2: string;
    };
    createdAt: string;
  };
  product: {
    _id: string;
    productName: string;
    option: string;
    images: string[];
  };
  createdAt: string;
}

export interface IMyReview {
  _id: string;
  product: {
    _id: string;
    productName: string;
    option: string;
    images: string[];
  };
  rating: number;
  content: string;
  images: string[];
  createdAt: string;
}
