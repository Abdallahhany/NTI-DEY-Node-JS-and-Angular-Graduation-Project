import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/core/models/book';
import { BookServices } from 'src/app/core/services/book_services';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  formSubmitted:boolean = false;
  uploadedImage:any;
  book!:Book;
  bookId:any;

  updateBookForm:FormGroup = new FormGroup({
    title:new FormControl("",[Validators.required,Validators.minLength(3)]),
    description:new FormControl("",[Validators.required,Validators.minLength(5)]),
    category:new FormControl("",[Validators.required]),
    author:new FormControl("",[Validators.required,Validators.minLength(3)]),
    price:new FormControl("",[Validators.required]),
    numOfPages:new FormControl("",[Validators.required]),
    quantity:new FormControl("",[Validators.required]),
    image:new FormControl("")
  });
  
  constructor(private bookService:BookServices,private activatedRoute:ActivatedRoute,
    private toastService:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.params["bookId"];
    
    this.bookService.getSingleBook(this.bookId).subscribe(
      res=> this.book = res.data,
      e=> {console.log(e); this.toastService.error('Invalid book ID')},
      ()=>{ 
       let {title,description,price,numOfPages,quantity,author,category} = this.book; 
       this.updateBookForm.patchValue({title,description,price,numOfPages,quantity,author,category}); }
    )
    
  }

  get title(){ return this.updateBookForm.get("title"); }
  get description(){ return this.updateBookForm.get("description"); }
  get price(){ return this.updateBookForm.get("price"); }
  get category(){ return this.updateBookForm.get("category"); }
  get author() { return this.updateBookForm.get("author"); }
  get numOfPages(){ return this.updateBookForm.get("numOfPages"); }
  get quantity(){ return this.updateBookForm.get("quantity"); }
  get image(){ return this.updateBookForm.get("image"); }

  addImage(event:any){
    this.uploadedImage = event.target.files[0];
  }

  updateBook(){
    this.formSubmitted = true;
    if(this.updateBookForm.valid){
      const formData = new FormData();
      if(this.uploadedImage) formData.append('bookImg',this.uploadedImage);
      formData.append('data',JSON.stringify({
        'title': this.title?.value,
        'description': this.description?.value,
        'price': this.price?.value,
        'category': this.category?.value,
        'author': this.author?.value,
        'numOfPages': this.numOfPages?.value,
        'quantity': this.quantity?.value,
      }));

      this.bookService.updateBook(this.bookId,formData).subscribe(
        data => {},
        e=> {console.log(e); this.toastService.error('Failed to update book');},
        ()=> {this.toastService.success('Book Updated'); this.router.navigateByUrl('/');}
      )
    }
  }

}
