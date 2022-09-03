import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { BookServices } from 'src/app/core/services/book_services';
import { CartServices } from 'src/app/core/services/cart_services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  allBooks:any[] = [];
  cartBooksIds:any[] = [];
  cartBooks:Book[] = [];
  totalPrice!:number;
  urlImage: string = 'http://localhost:3000/images/';
  
  constructor(private bookServices:BookServices,private cartServices:CartServices) { }

  ngOnInit(): void {
    this.cartServices.getCartBooks().subscribe(
      res=> {
        this.cartBooksIds = res.books;
        this.totalPrice = res.totalPrice;
      },
      e=> console.log(e),
      ()=>{
        this.bookServices.getAllBooks().subscribe(
          res=> {
            this.allBooks = res.data;
            for(let i=0;i<this.cartBooksIds.length;i++){
              this.cartBooks.push(this.allBooks.find((book)=>book._id == this.cartBooksIds[i]._id));
            }
          },
          e=>console.log(e),
          ()=>{}
        )
      }
    )
    
  }

}
