import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import { inject } from '@angular/core';
import {catchError, throwError} from 'rxjs';
import {Router} from '@angular/router';

export const AuthInterceptor: HttpInterceptorFn = (req,
next)=>{

  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse)=> {
      if(error.status === 401){
        router.navigateByUrl('/sign-in');
      }
      return throwError(()=> error);
    })
  )
}
