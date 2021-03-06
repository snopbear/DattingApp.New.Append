import { Register } from './../../../models/register/register';
import { Login } from './../../../models/login/login';
import { Injectable } from '@angular/core';
import { RootService } from '../../root-services/root.service';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();

  decodedToken: any;

  url = {
    login: 'auth/login',
    register: 'auth/register'
  };
  constructor(private rootService: RootService) { }

  login(login: Login) {
    return this.rootService
      .postRoot(this.url.login, login)
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
          }
        })
      );
  }


  register(register: Register) {
    return this.rootService
      .postRoot(this.url.register, register);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  loggOut(): boolean {
    const token = localStorage.removeItem('token');
    return true;
  }
}
