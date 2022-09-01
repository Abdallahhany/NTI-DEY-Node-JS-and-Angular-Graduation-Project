import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user';
import { UserServices } from 'src/app/core/services/user_services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    public userServices: UserServices,
    private router: Router,
    private toastr: ToastrService
  ) {
    userServices.getMe().subscribe((res) => {
      if (res.success) {
        this.userServices.isLoggedIn = true;
        this.userServices.user = res.user;
      }
    });
  }
  handelLogOut() {
    this.userServices.logout().subscribe((res) => {
      console.log(res);

      if (!res.success) {
        this.toastr.error(res.msg);
        return;
      }
      this.userServices.isLoggedIn = false;
      this.userServices.user = null;
      localStorage.removeItem('token');
      this.toastr.success(res.msg);
      this.router.navigateByUrl('/');
    });
  }
  ngOnInit(): void {}
}
