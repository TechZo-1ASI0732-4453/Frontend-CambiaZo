import { Injectable } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms"
import { SignUpUserDto } from "../dtos/signUpUser.dto";

@Injectable()
export class SignUpForm {
  readonly form:FormGroup;

  constructor(private fb: NonNullableFormBuilder) {
    this.form= this.fb.group({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        name: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+?[1-9]\d{1,14}$/)]),
        acceptTerms: new FormControl(false, [Validators.requiredTrue]),
    });
  }

  get password() { return this.form.get('password'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

  get passwordMismatchError() {
    return this.password && this.confirmPassword && this.password.value !== this.confirmPassword.value;
  }

  setData = (data: any): void => {
    this.form.patchValue(data);
  };

  getDataMappedToDto = () => {
    const { username, password, name, phoneNumber } = this.form.value;
    return new SignUpUserDto({
      username,
      password,
      name,
      phoneNumber
    });
  }

  reset() {this.form.reset();}

  getData = () => this.form.value;

  isValid = (): boolean => this.form.valid;
}