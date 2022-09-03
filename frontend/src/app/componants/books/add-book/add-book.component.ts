import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookServices } from 'src/app/core/services/book_services';
import { UserServices } from 'src/app/core/services/user_services';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  formSubmitted:boolean = false;
  uploadedImage:any;

  addBookForm:FormGroup = new FormGroup({
    title:new FormControl("",[Validators.required,Validators.minLength(3)]),
    description:new FormControl("",[Validators.required,Validators.minLength(5)]),
    price:new FormControl("",[Validators.required]),
    category:new FormControl("",[Validators.required]),
    author:new FormControl("",[Validators.required,Validators.minLength(3)]),
    numOfPages:new FormControl("",[Validators.required]),
    quantity:new FormControl("",[Validators.required]),
    image:new FormControl("",[Validators.required])
  });

  constructor(private userServices:UserServices,private bookService:BookServices,
    private router:Router, private toastService:ToastrService) { }

  ngOnInit(): void { 
    // setTimeout(() => {
    //   if(this.userServices.user?.role != 'admin'){
    //     this.router.navigateByUrl('/');
    //   }
    // }, 2000);
  }

  get title(){ return this.addBookForm.get("title"); }
  get description(){ return this.addBookForm.get("description"); }
  get price(){ return this.addBookForm.get("price"); }
  get category(){ return this.addBookForm.get("category"); }
  get author() { return this.addBookForm.get("author"); }
  get numOfPages(){ return this.addBookForm.get("numOfPages"); }
  get quantity(){ return this.addBookForm.get("quantity"); }
  get image(){ return this.addBookForm.get("image"); }

  addImage(event:any){
    this.uploadedImage = event.target.files[0];
  }

  addBook(){
    this.formSubmitted = true;
    if(this.addBookForm.valid){
      const formData = new FormData();
      formData.append('bookImg',this.uploadedImage);
      formData.append('data',JSON.stringify({
        'title': this.title?.value,
        'description': this.description?.value,
        'price': this.price?.value,
        'category': this.category?.value,
        'author': this.author?.value,
        'numOfPages': this.numOfPages?.value,
        'quantity': this.quantity?.value,
      }));

      this.bookService.addBook(formData).subscribe(
        data => {},
        e=> {console.log(e); this.toastService.error('Failed to add book');},
        ()=> {this.toastService.success('Book added'); this.router.navigateByUrl('/');}
      )
    }
  }

}
