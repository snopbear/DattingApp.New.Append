import { Login } from './../../shared/models/login/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/custom-services/auth/auth.service';
import { AlertifyService } from 'src/app/shared/services/alerts/alertify/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {} as Login;
  constructor(private router: Router,
              private authService: AuthService,
              private  alertifyService: AlertifyService) { }
  ngOnInit() { }

  submit(): void {
    this.authService.login(this.login).subscribe(next => {
      this.router.navigateByUrl('/home');
    },
      error => {
       this.alertifyService.error(error);
      });
  }

  loggedin() {
   return this.authService.loggedIn();
    // const token = localStorage.getItem('token');
    // return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertifyService.message('logged out');
  }
}
