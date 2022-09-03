import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/core/models/book';
import { BookServices } from 'src/app/core/services/book_services';
import { CartServices } from 'src/app/core/services/cart_services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  allBooks: any[] = [];
  cartBooksIds: any[] = [];
  cartBooks: Book[] = [];
  totalPrice!: number;
  urlImage: string = 'http://localhost:3000/images/';

  constructor(
    private bookServices: BookServices,
    private cartServices: CartServices,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cartServices.getCart().subscribe(
      (res) => {
        this.cartBooksIds = res.books;
        this.totalPrice = res.totalPrice;
      },
      (e) => console.log(e),
      () => {
        this.bookServices.getAllBooks().subscribe(
          (res) => {
            this.allBooks = res.data;
            for (let i = 0; i < this.cartBooksIds.length; i++) {
              this.cartBooks.push(
                this.allBooks.find(
                  (book) => book._id == this.cartBooksIds[i]._id
                )
              );
            }
          },
          (e) => console.log(e),
          () => {}
        );
      }
    );
  }

  deleteCart(cartId?: string) {
    this.cartServices.deleteCart(cartId!).subscribe((res) => {
      if (!res.success) {
        this.toastr.error(res.msg);
        this.router.navigateByUrl('/');
        return;
      }
      this.toastr.success(res.msg);
      this.router.navigate(['cart']).then(() => {
        window.location.reload();
      });
      return;
    });
  }

  checkout(cartBooks: Book[], totalPrice: number) {
    const data = {
      products: cartBooks,
      totalPrice,
    };
    this.cartServices.checkOut(data).subscribe((res) => {
      console.log(res);

      if (!res.success) {
        this.toastr.error(res.msg);
        this.router.navigateByUrl('/');
        return;
      }
      this.toastr.success(res.msg);
      this.router.navigateByUrl(`/`);

      return;
    });
  }
}
