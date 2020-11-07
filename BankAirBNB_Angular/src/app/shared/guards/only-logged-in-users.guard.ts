import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class OnlyLoggedInUsersGuard implements CanActivate {

  constructor(private userService: UserService, private route: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.userService.isLoggedUser()) {
        this.route.navigate(['/signin']);
        return false;
      }
    return true;
  }
  
}
