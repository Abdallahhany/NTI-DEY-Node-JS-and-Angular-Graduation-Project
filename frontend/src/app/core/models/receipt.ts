import { Book } from './book';
import { User } from './user';

export interface Receipt {
  user: User;
  productsInfo: Book[];
  totalPrice: number;
}
