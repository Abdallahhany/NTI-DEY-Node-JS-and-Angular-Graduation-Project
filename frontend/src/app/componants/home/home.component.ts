import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/core/models/book';
import { BookServices } from 'src/app/core/services/book_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books!: Book[];

  constructor(
    private bookServices: BookServices,
    private toastr: ToastrService
  ) {
    bookServices.getAllBooks().subscribe((res) => {
      if (!res.success) {
        toastr.error(res.msg);
        return;
      }
      this.books = res.data;
      console.log(this.books);
    });
  }

  ngOnInit(): void {}
}
