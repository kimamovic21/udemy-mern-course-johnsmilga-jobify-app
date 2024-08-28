import { UnauthenticatedError } from '../errors/customErrors.js';
import { verifyJWT } from '../utils/tokenUtils.js';

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    throw new UnauthenticatedError('authentication invalid');
  };

  try {
    // const user = verifyJWT(token);
    // console.log('user: ', user);
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid');
  };
};