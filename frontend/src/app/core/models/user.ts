import { Cart } from './cart';
import { Book } from './book';
import { Receipt } from './receipt';

export interface User {
  userName: string;
  email: string;
  password: string;
  avatar?: string;
  isAdmin?: boolean;
  role?: string;
  _id: string;
  cart?: Cart;
  favoriteBooks?: Book[];
  receipts?: Receipt[];
  tokens?: [
    {
      token: string;
      _id: string;
    }
  ];
}
