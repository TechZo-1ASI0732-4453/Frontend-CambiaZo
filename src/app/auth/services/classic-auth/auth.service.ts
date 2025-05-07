import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';
import {SignUpUserDto} from '../../dtos/signUpUser.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl:string = environment.apiUrl;
  private http:HttpClient = inject(HttpClient);


  constructor() { }

  signIn(username:string, password:string){
    return this.http.post<any>(`${this.apiUrl}/authentication/sign-in`, {username, password});
  }


  signUp(user: SignUpUserDto):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/authentication/sign-up`, user);
  }

}
