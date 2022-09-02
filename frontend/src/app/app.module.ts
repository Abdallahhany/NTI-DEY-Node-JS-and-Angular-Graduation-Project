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
import { NavComponent } from './componants/shared/nav/nav.component';
import { SingleComponent } from './componants/books/single/single.component';
import { AddBookComponent } from './componants/books/add-book/add-book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateBookComponent } from './componants/books/update-book/update-book.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    NavComponent,
    SingleComponent,
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
    NgbModule,
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
