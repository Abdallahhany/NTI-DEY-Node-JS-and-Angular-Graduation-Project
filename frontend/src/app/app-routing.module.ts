import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './componants/books/add-book/add-book.component';
import { SingleComponent } from './componants/books/single/single.component';
import { UpdateBookComponent } from './componants/books/update-book/update-book.component';
import { CartComponent } from './componants/cart/cart.component';
import { HomeComponent } from './componants/home/home.component';
import { AllComponent } from './componants/user/all/all.component';
import { ChangePasswordComponent } from './componants/user/change-password/change-password.component';
import { EditProfileComponent } from './componants/user/edit-profile/edit-profile.component';
import { EditComponent } from './componants/user/edit/edit.component';
import { LoginComponent } from './componants/user/login/login.component';
import { ProfileComponent } from './componants/user/profile/profile.component';
import { RegisterComponent } from './componants/user/register/register.component';
import { AdminGuard } from './core/guards/admin.guard';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    children: [
      { path: '', component: ProfileComponent },
      { path: 'edit_profile/:userId', component: EditProfileComponent },
      { path: 'change_password/:userId', component: ChangePasswordComponent },
    ],
  },
  {
    path: 'books',
    children: [
      { path: 'single/:bookId', component: SingleComponent },
      { path: 'add', component: AddBookComponent,canActivate:[AdminGuard] },
      { path: 'update/:bookId', component: UpdateBookComponent,canActivate:[AdminGuard] },
    ],
  },
  {
    path: 'users',
    children: [
      { path: 'all', component: AllComponent },
      { path: 'edit/:userId', component: EditComponent },
    ],
  },
  { path:'cart', component: CartComponent, canActivate:[UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
