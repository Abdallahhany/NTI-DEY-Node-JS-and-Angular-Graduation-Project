import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServices } from 'src/app/core/services/user_services';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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
    email: new FormControl('', Validators.email),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.required,
    ]),
  });
  get userName() {
    return this.registerForm.get('userName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  ngOnInit(): void {}
  handelRegister() {
    const userData: User = this.registerForm.value;
    this.userServices.register(userData).subscribe((res) => {
      if (res.success) {
        this.toastr.success('User register successfully');
        this.router.navigateByUrl('/login');
      } else this.toastr.error(res.msg);
      console.log(res);
    });
    console.log(this.registerForm.value);
  }
}
