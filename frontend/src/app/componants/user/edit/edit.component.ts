import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user';
import { UserServices } from 'src/app/core/services/user_services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  userId!: string | null;
  user!: User;
  constructor(
    private userServices: UserServices,
    private router: Router,
    private route: ActivatedRoute,

    private toastr: ToastrService
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');
    console.log(this.userId);

    if (!this.userId) {
      this.toastr.error('Please Enter User ID');
      this.router.navigateByUrl('/');
      return;
    }
    this.userServices.getSingleUser(this.userId).subscribe((res) => {
      if (!res.success) {
        toastr.error(res.msg);
        this.router.navigateByUrl('/');
        return;
      }
      this.user = res.user;
    });
  }

  editUser(role: string) {
    const data = { role };
    this.userServices.updateUserRole(this.userId!, data).subscribe((res) => {
      console.log(res);

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
  ngOnInit(): void {}
}
