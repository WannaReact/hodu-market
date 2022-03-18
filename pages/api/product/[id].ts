import Product from 'models/Product';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  if (typeof id !== 'string') {
    return;
  }
  const product = await Product.findOne({ _id: id }).populate('reviews');
  success(res, product);
});

export default handler;
