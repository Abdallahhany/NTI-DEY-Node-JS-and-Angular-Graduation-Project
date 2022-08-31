export interface Book {
  _id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
  pagesCount: number;
  price: number;
  qty?: number;
}
