import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { SignInUser } from '../../auth/models/signInUser.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = environment.apiUrl;
  private readonly http: HttpClient = inject(HttpClient);
  
  getUserInfoById(id: number): Observable<SignInUser> {
    return this.http.get<SignInUser>(`${this.apiUrl}/users/${id}`);
  }
}
