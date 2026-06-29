import { Favoritos } from '../favoritos/favoritos';

export type Role = 'admin' | 'premium' | 'user';

export interface Cliente {
  id?: number;
  nome?: string;
  email?: string;
  role?: Role;
  posts?: Favoritos;
}