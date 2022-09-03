import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user';
import { UserServices } from 'src/app/core/services/user_services';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  constructor(
    private userServices: UserServices,
    private router: Router,
    private toastr: ToastrService
  ) {}
  editForm: FormGroup = new FormGroup({
    userName: new FormControl(this.userServices.user?.userName, [
      Validators.minLength(6),
      Validators.maxLength(20),
      Validators.required,
    ]),
    email: new FormControl(this.userServices.user?.email, Validators.email),
    avatar: new FormControl(this.userServices.user?.avatar),
  });
  get userName() {
    return this.editForm.get('userName');
  }
  get email() {
    return this.editForm.get('email');
  }
  get avatar() {
    return this.editForm.get('avatar');
  }
  handelEdit() {
    const userData: User = this.editForm.value;
    this.userServices.updateProfile(userData).subscribe((res) => {
      if (res.success) {
        this.toastr.success('User Updated successfully');
        this.router.navigateByUrl('/profile');
      } else {
        this.toastr.error(res.msg);
        this.router.navigateByUrl('/profile');
      }
      console.log(res);
    });
  }
  ngOnInit(): void {}
}
