import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user';
import { UserServices } from 'src/app/core/services/user_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userServices: UserServices,
    private router: Router,
    private toastr: ToastrService
  ) {}
  registerForm: FormGroup = new FormGroup({
    userName: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.required,
    ]),
  });
  get userName() {
    return this.registerForm.get('userName');
  }
  get password() {
    return this.registerForm.get('password');
  }
  handelLogin() {
    const userData: User = this.registerForm.value;
    this.userServices.login(userData).subscribe((res) => {
      if (!res.success) {
        return this.toastr.error(res.msg);
      }
      console.log(res);
      localStorage.setItem('token', res.data.token);
      this.toastr.success(res.msg);
      return this.router.navigateByUrl('/profile');
    });
  }
  ngOnInit(): void {}
}
