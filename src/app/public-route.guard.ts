import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { UserService } from './core/user.service';

@Injectable({
  providedIn: 'root'
})
export class PublicRouteGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/app']);
      return false;
    }
    return true;
  }
}
