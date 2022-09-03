import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { UserServices } from '../services/user_services';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(private userServices:UserServices,
    private toastService:ToastrService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(!localStorage.getItem("token") || this.userServices.user?.role!='admin'){
        this.toastService.error('Please login first');
        this.router.navigateByUrl('/login');
        return false;
      }
    return true;
  }
  
}
