import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServices } from 'src/app/core/services/user_services';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(
    private userServices: UserServices,
    private router: Router,
    private toastr: ToastrService
  ) {}
  changePasswordForm: FormGroup = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.required,
    ]),
    newPassword: new FormControl('', [
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.required,
    ]),
  });
  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }
  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }
  handelChangePassword() {
    this.userServices
      .updatePassword(this.changePasswordForm.value)
      .subscribe((res) => {
        if (!res.success) {
          this.toastr.error(res.msg);
          this.router.navigateByUrl('/profile');
          return;
        }
        this.toastr.success(res.msg);
        localStorage.setItem('token', res.data.token);
        this.router.navigateByUrl('/profile');
      });
  }
  ngOnInit(): void {}
}
