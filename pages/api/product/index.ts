import Product from 'models/Product';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();

handler.get(async (req, res) => {
  const products = await Product.find({});
  success(res, products);
});

handler.post(async (req, res) => {
  const { body } = req;
  await new Product(body).save();
  success(res);
});

export default handler;
