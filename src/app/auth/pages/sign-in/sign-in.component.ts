import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/classic-auth/auth.service';
import {GoogleAuthService} from '../../services/google-auth/google-auth.service';
import {SignUpUserDto} from '../../dtos/signUpUser.dto';
import { SignInForm } from '../../forms/sign-in.form';
import { SHARED_IMPORTS } from '../../../shared';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { FooterContentComponent } from '../../components/footer-content/footer-content.component';



@Component({
  selector: 'app-sign-in',
  imports: [
    FooterContentComponent,
    FormsModule,
    SHARED_IMPORTS,
    NzIconModule,
],
  providers: [SignInForm],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  private googleAuthService: GoogleAuthService=inject(GoogleAuthService);
  private classicAuthService: AuthService=inject(AuthService);
  public readonly signInForm: SignInForm=inject(SignInForm);

  passwordVisible:boolean=false;

  onClassicSignIn(){
    if(this.signInForm.isValid()){
      const data = this.signInForm.getData();
      this.signIn(data.username, data.password);
    }
  }

  async googleSignIn() {
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

        this.classicAuthService.signIn(email, password).subscribe({
          next: (response) => {
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
    this.classicAuthService.signUp(signUpUserDto).subscribe({
      next: (response) => {
        this.classicAuthService.signIn(signUpUserDto.username, signUpUserDto.password).subscribe({
          next: (loginResponse) => {
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


  signIn(email:string, password:string){
    this.classicAuthService.signIn(email,password).subscribe({
      next: (response)=>{
        console.log('success: ', response);
      },
      error: ()=>{
        console.log('error');
      }
    });
  }

}
