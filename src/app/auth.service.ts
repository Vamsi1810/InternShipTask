import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   isLoggedIn: boolean = false;

  constructor(
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn) {
      return true;
    } else {
      alert('')
      this.router.navigate(['']);
      return false;
    }
  }
}
