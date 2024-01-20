import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { LoginType, Token } from '../types/User';
import { ServiceResponse } from '../types/ServiceResponse';
import jwtUtil from '../utils/jwt.utils';

const loginAccess = async (login: LoginType)
: Promise<ServiceResponse<Token>> => {
  if (!login.username || !login.password) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }
    
  const foundUser = await UserModel.findOne({ where: { username: login.username } });

  if (!foundUser || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }
    
  const { id, username } = foundUser.dataValues;
  const token = jwtUtil.sign({ id, username });
    
  return { status: 'SUCCESS', data: { token } };
};          

export default {
  loginAccess,
};
