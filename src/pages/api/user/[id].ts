import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { send } from 'lib/mongoose/response';
import createHandler from 'lib/mongoose/createHandler';

const handler = createHandler();
const { User } = mongoose.models;

handler.get(async (req, res) => {
  const {
    query: { id }
  } = req;
  const user = await User.findById(id, '-password -cart -updatedAt')
    .lean()
    .exec();
  send(res, user);
});

handler.put(async (req, res) => {
  const {
    body: {
      password,
      userName,
      nickname,
      phone,
      email,
      address: { postalCode, address1, address2 },
      image
    },
    query: { id }
  } = req;
  const user = await User.findByIdAndUpdate(
    id,
    {
      password:
        typeof password === 'string'
          ? await bcrypt.hash(password, 10)
          : password,
      userName,
      nickname,
      phone,
      email,
      'address.postalCode': postalCode,
      'address.address1': address1,
      'address.address2': address2,
      image
    },
    { new: true, select: '-password -cart -updatedAt' }
  ).exec();
  send(res, user);
});

handler.delete(async (req, res) => {
  const {
    query: { id }
  } = req;
  const user = await User.findByIdAndDelete(id, {
    select: '-password -cart -updatedAt'
  })
    .lean()
    .exec();
  send(res, user);
});

export default handler;
