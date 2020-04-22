import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationErrors } from 'src/app/shared/validation/gerneric-validation/validation-errors';
import { AuthService } from 'src/app/shared/services/custom-services/auth/auth.service';
import { Register } from 'src/app/shared/models/register/register';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/shared/services/alerts/alertify/alertify.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  register = {} as Register;

  initForm(): FormGroup {
    return this.form = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            ValidationErrors.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            ValidationErrors.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            ValidationErrors.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            // check whether the entered password has a special character
            ValidationErrors.patternValidator(
              /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
              {
                hasSpecialCharacters: true
              }
            ),
            Validators.minLength(8)
          ])
        ],
        confirmPassword: [null, Validators.compose([Validators.required])]
      },
      {
        // check whether our password and confirm password match
        validator: ValidationErrors.passwordMatchValidator
      });
  }


  mapFormValues() {

    this.register.username = this.form.value.username;
    this.register.password = this.form.value.password;
  }

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private alertifyService: AlertifyService) {
    this.form = this.initForm();
  }

  ngOnInit(): void {

  }

  submit(): void {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.mapFormValues();
    this.authService.register(this.register).subscribe(next => {
      this.alertifyService.message('Registeration Successful');
      this.router.navigateByUrl('/login');
    },
      error => {
        this.alertifyService.error(error);
      });
  }
}
