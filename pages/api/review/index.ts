import Review from 'models/Review';
import User from 'models/User';
import Product from 'models/Product';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();

handler.get(async (req, res) => {
  const reviews = await Review.find({});
  success(res, reviews);
});

handler.post(async (req, res) => {
  const { body } = req;
  const { userId, productId } = body ?? {};
  const { _id } = await new Review({ ...body }).save();
  await Promise.all([
    userId &&
      User.findOneAndUpdate({ _id: userId }, { $push: { reviews: _id } }),
    productId &&
      Product.findOneAndUpdate({ _id: productId }, { $push: { reviews: _id } })
  ]);
  success(res);
});

export default handler;
