import { Login } from './../../shared/models/login/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/custom-services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {} as Login;
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit() { }

  submit(): void {
    this.authService.login(this.login).subscribe(next => {
      this.router.navigateByUrl('/home');
    },
      error => {
        console.log(error);
      });
  }

  loggedin() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
