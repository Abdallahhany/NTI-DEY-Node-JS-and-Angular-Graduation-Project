import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  formSubmitted:boolean = false;

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

  constructor() { }

  ngOnInit(): void {
  }

  get title(){ return this.addBookForm.get("title"); }
  get description(){ return this.addBookForm.get("description"); }
  get price(){ return this.addBookForm.get("price"); }
  get category(){ return this.addBookForm.get("category"); }
  get author() { return this.addBookForm.get("author"); }
  get numOfPages(){ return this.addBookForm.get("numOfPages"); }
  get quantity(){ return this.addBookForm.get("quantity"); }
  get image(){ return this.addBookForm.get("image"); }

  addBook(){
    this.formSubmitted = true;
    if(this.addBookForm.valid){
    }
  }

}
