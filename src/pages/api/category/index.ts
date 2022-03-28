import mongoose from 'mongoose';
import { success } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { Category } = mongoose.models;

handler.get(async (req, res) => {
  const categories = await Category.find({});
  success(res, categories);
});

handler.post(async (req, res) => {
  const {
    body: { categoryName }
  } = req;
  await new Category({ categoryName }).save();
  success(res);
});

export default handler;
