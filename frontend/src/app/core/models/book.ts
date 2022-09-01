export interface Book {
  _id?: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  author: string;
  numOfPages: number;
  rating?: number;
  quantity: number;
}
