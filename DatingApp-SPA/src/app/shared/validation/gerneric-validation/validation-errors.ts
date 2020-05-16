import { FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

export class ValidationErrors {
    static logValidationErrors(group: FormGroup, formErrors?: any, validationMessages?: any, errorMessages?: any[]): void {
        Object.keys(group.controls).forEach((key: string) => {
            const abstractControl = group.get(key);

            formErrors[key] = '';
            if (
                abstractControl &&
                !abstractControl.valid &&
                (abstractControl.touched || abstractControl.dirty)
            ) {
                const messages = validationMessages[key];

                errorMessages = [];
                for (const errorKey in abstractControl.errors) {
                    if (errorKey) {
                        const errorValue = messages[errorKey];
                        const errorObject = {
                            key: errorKey,
                            value: errorValue,
                            status: true
                        };
                        errorMessages.push(errorObject);

                        formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl.errors === null) {
                errorMessages = [];
            }
            if (abstractControl instanceof FormGroup) {
                this.logValidationErrors(abstractControl);
            }
        }, this);
    }

    static passwordValidator(form: FormGroup) {
        const condition = form.get('password').value !== form.get('verifyPassword').value;

        return condition ? { passwordsDoNotMatch: true } : null;
    }




    // tslint:disable-next-line:comment-format
    // https://github.com/mainawycliffe/ng-bootstrap-password-validation-example/blob/master/src/app/custom-validators.ts
    // CustomValidators


    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }

            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);

            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    }

    static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password').value; // get password from our password form control
        const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    }


    

}