export interface Book {
  _id?: string;
  title: string;
  author: string;
  description: string;
  image: string;
  numOfPages: number;
  rating?:number;
  ratedBy?:[{
    userId:string,
    rateValue:number
  }];
  price: number;
  category:string;
  quantity: number;
}
