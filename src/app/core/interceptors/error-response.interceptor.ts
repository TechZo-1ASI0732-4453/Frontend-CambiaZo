import {catchError, throwError} from "rxjs";
import {HttpErrorResponse} from '@angular/common/module.d-CnjH8Dlt';

export const ErroResponseInterceptor = (req, next) =>
  next(req).pipe(catchError(handleErrorResponse));

function handleErrorResponse(error: HttpErrorResponse) {
  return throwError(error);
}
