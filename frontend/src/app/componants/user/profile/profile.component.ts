import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user';
import { UserServices } from 'src/app/core/services/user_services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user!: User;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private _userService: UserServices
  ) {
    _userService.getMe().subscribe((res) => {
      console.log(res);

      if (!res.success) {
        toastr.error('Login first To access this page');
        router.navigateByUrl('/login');
        return;
      }
      this.user = res.user;
      console.log(this.user);
    });
  }

  ngOnInit(): void {}
}
