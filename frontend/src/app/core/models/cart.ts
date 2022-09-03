import { Book } from './book';
import { User } from './user';

export interface Cart {
  userId?: string;
  books?: Book[];
  totalPrice: number;
}
