import { Cliente } from './cliente';

export interface UserResponse {
  user: Cliente;
  exp: number;
  iat: number;
}