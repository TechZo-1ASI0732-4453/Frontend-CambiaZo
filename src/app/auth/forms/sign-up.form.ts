import { Injectable } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms"

@Injectable()
export class SignUpForm {
  readonly form:FormGroup;

  constructor(private fb: NonNullableFormBuilder) {
    this.form= this.fb.group({
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required]),
    });
  }

  setData = (data: any): void => {
    this.form.patchValue(data);
  };

  reset() {this.form.reset();}

  getData = () => this.form.value;

  isValid = (): boolean => this.form.valid;
}