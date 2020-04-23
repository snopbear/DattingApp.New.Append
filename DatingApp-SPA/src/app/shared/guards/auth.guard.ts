import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/custom-services/auth/auth.service';
import { AlertifyService } from '../services/alerts/alertify/alertify.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,
              private alertify: AlertifyService) { }

  canActivate(): boolean {
    // tslint:disable-next-line:no-debugger
    debugger;
    if (this.authService.loggedIn()) {
      return true;
    } else {

      this.alertify.error('You Shall not pass !!!');
      this.router.navigate(['/login']);
      return false;
    }
  }

}
