import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';


export const ErrorInterceptor: HttpInterceptorFn = (req,
next)=>{
  return next(req).pipe(
    catchError((error: HttpErrorResponse)=> {
      if(error.status === 400){
        console.log('Bad request');
      }else if(error.status === 500){
        console.log('Internal error');
      }
      return throwError(()=> error.error.message);
    })
  )
};
