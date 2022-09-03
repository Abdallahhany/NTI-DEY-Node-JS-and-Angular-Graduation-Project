import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/core/models/book';
import { Cart } from 'src/app/core/models/cart';
import { User } from 'src/app/core/models/user';
import { BookServices } from 'src/app/core/services/book_services';
import { CartServices } from 'src/app/core/services/cart_services';
import { UserServices } from 'src/app/core/services/user_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books!: Book[];
  user!: User | null;
  deleteDialogue: boolean = false;
  deletedBookId: any;

  constructor(
    private bookServices: BookServices,
    public userServices: UserServices,
    private cartServices: CartServices,
    private router: Router,
    private toastr: ToastrService
  ) {
    bookServices.getAllBooks().subscribe((res) => {
      if (!res.success) {
        toastr.error(res.msg);
        return;
      }
      this.books = res.data;
    });
  }

  top(id: any) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.deleteDialogue = true;
    this.deletedBookId = id;
  }
  ngOnInit(): void {}

  deleteBook() {
    this.deleteDialogue = false;
    this.bookServices.deleteBook(this.deletedBookId).subscribe(
      (data) =>
        (this.books = this.books.filter(
          (book) => book._id != this.deletedBookId
        )),
      (e) => console.log(e),
      () => {}
    );
  }

  addCart(bookId: any) {
    if (this.userServices.isLoggedIn) {
      let data = { bookId: bookId };
      this.cartServices.addToCart(data).subscribe(
        (data) => this.toastr.success('Book added to cart'),
        (e) => console.log(e),
        () => {}
      );
    } else {
      this.toastr.error('Please Login to add to cart');
    }
  }
}
