import {inject, Injectable} from '@angular/core';
import {GoogleAuthProvider, signInWithPopup} from '@angular/fire/auth';
import {Auth} from '@angular/fire/auth';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private readonly googlePassword = environment.googlePassword;

  private auth: Auth = inject(Auth);

  loginWithGoogle(){
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth,provider);
  }

  get googlePasswordGetter() {
    return this.googlePassword;
  }
}


