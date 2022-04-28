export interface IUser {
  _id: string;
  userId: string;
  password: string;
  userName: string;
  nickname: string;
  email: string;
  phone: string;
  money: number;
  cart: string[];
  orders: string[];
  reviews: string[];
  wishList: string[];
  inquiries: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IComment {
  _id: string;
  userId: string;
  reviewId: string;
  content: string;
  createdAt: string;
}

export interface IReview {
  _id: string;
  productId: string;
  userId: string;
  rating: number;
  content: string;
  images: string[];
  comments: IComment[];
  createdAt: string;
}

export interface IInquiry {
  _id: string;
  productId: string;
  userId: string;
  content: string;
  answer?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProduct {
  _id: string;
  productName: string;
  categories: string[];
  price: number;
  discount: string;
  stock: number;
  images: string[];
  reviews: IReview[];
  inquiries: IInquiry[];
  createdAt: string;
  updatedAt: string;
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
