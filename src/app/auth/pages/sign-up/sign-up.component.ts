import { Component } from '@angular/core';
import { SignUpForm } from '../../forms/sign-up.form';

@Component({
  selector: 'app-sign-up',
  imports: [],
  providers: [SignUpForm],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(public readonly signUpForm: SignUpForm) {}

  onSignUp() {
    if (this.signUpForm.isValid()) {
      const data = this.signUpForm.getData();
      console.log(data);
      // Call your sign-up service here with the data
    } else {
      console.log('Form is invalid');
    }
  }
}
