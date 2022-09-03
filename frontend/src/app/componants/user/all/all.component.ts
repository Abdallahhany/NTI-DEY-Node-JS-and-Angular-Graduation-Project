import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user';
import { UserServices } from 'src/app/core/services/user_services';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  users!: User[];
  constructor(
    private userServices: UserServices,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.userServices.getAllUsers().subscribe((res) => {
      console.log(res);
      if (!res.success) {
        toastr.error(res.msg);
        router.navigateByUrl('/');
        return;
      }
      this.users = res.users;
    });
  }

  deleteUser(userId: string) {
    this.userServices.getMe().subscribe((res) => {
      if (res.user._id == userId) {
        // user delete himself
        this.userServices.deleteUser(userId).subscribe((res) => {
          if (!res.success) {
            this.toastr.error(res.msg);
            this.router.navigateByUrl('/');
            return;
          }
          this.toastr.success(res.msg);
          localStorage.removeItem('token');
          this.router.navigateByUrl('/login');
          return;
        });
      } else {
        this.userServices.deleteUser(userId).subscribe((res) => {
          if (!res.success) {
            this.toastr.error(res.msg);
            this.router.navigateByUrl('/');
            return;
          }
          this.toastr.success(res.msg);
          this.router.navigateByUrl('/');
          return;
        });
      }
    });
  }
  ngOnInit(): void {}
}
