import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './componants/books/add-book/add-book.component';
import { SingleComponent } from './componants/books/single/single.component';
import { UpdateBookComponent } from './componants/books/update-book/update-book.component';
import { HomeComponent } from './componants/home/home.component';
import { LoginComponent } from './componants/user/login/login.component';
import { ProfileComponent } from './componants/user/profile/profile.component';
import { RegisterComponent } from './componants/user/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'books', children: [
    { path: 'single/:bookId', component: SingleComponent},
    { path: 'add', component: AddBookComponent},
    { path: 'update/:bookId', component: UpdateBookComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
