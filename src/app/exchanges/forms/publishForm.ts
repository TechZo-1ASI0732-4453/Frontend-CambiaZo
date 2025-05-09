import {Injectable} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from "@angular/forms"

@Injectable()
export class PublishForm{

  readonly form:FormGroup;

  constructor(private fb: NonNullableFormBuilder) {
    this.form= this.fb.group({
        country: new FormControl('', [Validators.required]),
        department: new FormControl('', [Validators.required]),
        district: new FormControl('', [Validators.required]),
    });
  }
  setData = (data: any): void => {
    this.form.patchValue(data);
  };

  reset() {this.form.reset();}

  getData = () => this.form.value;

  isValid = (): boolean => this.form.valid;


}
