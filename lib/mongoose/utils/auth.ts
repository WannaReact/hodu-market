import { CustomJWT } from '@pages/api/auth/[...nextauth]';

export default (token: CustomJWT | null, admin = false) => {
  if (admin) {
    return !token || !token.isAdmin;
  }
  return !token;
};
