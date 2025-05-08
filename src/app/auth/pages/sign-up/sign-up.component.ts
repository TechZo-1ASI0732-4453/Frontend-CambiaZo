import { Component, inject } from '@angular/core';
import { SignUpForm } from '../../forms/sign-up.form';
import { FooterContentComponent } from "../../components/footer-content/footer-content.component";
import { SHARED_IMPORTS } from '../../../shared';
import { AuthService } from '../../services/classic-auth/auth.service';
import { SignUpUserDto } from '../../dtos/signUpUser.dto';
import { GoogleAuthService } from '../../services/google-auth/google-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FooterContentComponent, SHARED_IMPORTS],
  providers: [SignUpForm],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  public readonly signUpForm: SignUpForm = inject(SignUpForm);
  private googleAuthService: GoogleAuthService=inject(GoogleAuthService);
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);

  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;

  checkPasswordMatch(){
    if (this.signUpForm.passwordMismatchError) {
      this.signUpForm.confirmPassword?.setErrors({ passwordMismatch: true });
    } else {
      this.signUpForm.confirmPassword?.setErrors(null);
    }
  }


  onSignUp() {
    if (this.signUpForm.isValid()) {
      const data = this.signUpForm.getDataMappedToDto();
      this.authService.signUp(data).subscribe({
        next: (response) => {
          this.router.navigate(['/sign-in']);
          console.log('Sign up successful', response);
        },
        error: (error) => {
          console.error('Sign up failed', error);
        }
      });
    } else {
      Object.values(this.signUpForm.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  async onSignUpWithGoogle() {
    try {
      const userCredential = await this.googleAuthService.loginWithGoogle();
      if (userCredential && userCredential.user) {
        const user = userCredential.user;
        const email = user.email;
        const password = this.googleAuthService.googlePasswordGetter;

        if (!email) {
          console.log('No email provided');
          return;
        }

        this.authService.signIn(email, password).subscribe({
          next: (response) => {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/home']);
            console.log('Login successful', response);
          },
          error: (error) => {
            const signUpUserDto = new SignUpUserDto({
              username: email,
              password: password,
              name: user.displayName || '',
              phoneNumber: user.phoneNumber || '',
              profilePicture: user.photoURL || '',
              isGoogleAccount: true
            });
            this.signUpWithGoogleCredentials(signUpUserDto);
          }
        });
      }
    } catch (error) {
      console.log('Error during Google authentication:', error);
    }
  }

  signUpWithGoogleCredentials(signUpUserDto: SignUpUserDto) {
    this.authService.signUp(signUpUserDto).subscribe({
      next: (response) => {
        this.authService.signIn(signUpUserDto.username, signUpUserDto.password).subscribe({
          next: (loginResponse) => {
            this.router.navigate(['/home']);
            console.log('Account created and logged in successfully', loginResponse);
          },
          error: (loginError) => {
            console.log('Error logging in after account creation', loginError);
          }
        });
      },
      error: (error) => {
        console.log('Error creating account', error);
      }
    });
  }

}
