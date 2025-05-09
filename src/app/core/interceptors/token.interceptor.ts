import {HttpInterceptorFn} from '@angular/common/http';

export const TokenInterceptor: HttpInterceptorFn = (req,
  next)=>{
  const token = localStorage.getItem('token');
  const isExcluded = req.url.includes('sign-in') || req.url.includes('sign-up');

  if(token && !isExcluded){
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
}
