import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { LoginComponent } from './componants/user/login/login.component';
import { RegisterComponent } from './componants/user/register/register.component';
import { ProfileComponent } from './componants/user/profile/profile.component';
import { HomeComponent } from './componants/home/home.component';
import { UserServices } from './core/services/user_services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ShowBooksComponent } from './componants/book/show-books/show-books.component';
import { ShowSingleBookComponent } from './componants/book/show-single-book/show-single-book.component';
import { AddBookComponent } from './componants/book/add-book/add-book.component';
import { UpdateBookComponent } from './componants/book/update-book/update-book.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    ShowBooksComponent,
    ShowSingleBookComponent,
    AddBookComponent,
    UpdateBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    UserServices,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
