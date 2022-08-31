import { Book } from './book';
import { User } from './user';

export interface Cart {
  user: User;
  books: Book[];
  totalPrice: number;
}
