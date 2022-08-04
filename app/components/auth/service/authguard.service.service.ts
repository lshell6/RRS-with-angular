import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean{
    let status = this.authService.isLoggedIn();
    if(status == false){
      this.authService.message$.next('please login');
      this.router.navigateByUrl('/login');
    }
    return status;
  }
}