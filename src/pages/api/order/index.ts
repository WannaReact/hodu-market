import mongoose from 'mongoose';
import { fail, success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';
import orderNumGen from 'lib/mongoose/orderNumGen';

const handler = createHandler();
const { User, Product, Order, Coupon } = mongoose.models;

handler.get(async (req, res) => {
  const orders = await Order.find({});
  success(res, orders);
});

handler.post(async (req, res) => {
  const {
    body: {
      productId,
      userId,
      couponId,
      count,
      cost,
      courier,
      invoice,
      addressee
    }
  } = req;
  const doesIdExist = (
    await Promise.allSettled([
      Product.exists({ _id: productId }),
      Coupon.exists({ _id: couponId })
    ])
  ).every((result) => result);
  if (doesIdExist) {
    const order = await new Order({
      orderNumber: orderNumGen(),
      status: '결제완료',
      productId,
      userId,
      couponId,
      count,
      cost,
      courier,
      invoice,
      addressee
    }).save();
    const { _id } = order;
    await User.findByIdAndUpdate(userId, { $push: { options: _id } });
    success(res, order);
  } else {
    fail(res, '상품ID 또는 쿠폰ID가 유효하지 않습니다.');
  }
});

export default handler;
