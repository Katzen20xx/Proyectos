import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { IUserResponse } from 'src/app/shared/models/userResponse.model';
import { catchError, retry } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlAPI: string = environment.urlBase;

  constructor(private httpClient: HttpClient ) { }

  private isLogged: boolean = false;

  public isLoggedUser(): boolean {
    this.isLogged = localStorage.getItem('token') ?  true : false; 
    return this.isLogged;
  }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError(`Error calling API ${error.message}`);
  }

  public registerUser (user: IUser): Observable<IUserResponse> {
    const url = `${this.urlAPI}/users/signup`;
    return this.httpClient.post<IUserResponse>(url, user).pipe(
      retry(2), catchError(this.handlerError) 
    )
  }

  public loginUser (user: IUser): Observable<IUserResponse> {
    const url = `${this.urlAPI}/users/login`;
    return this.httpClient.post<IUserResponse>(url,user).pipe(
      retry(2), catchError(this.handlerError)
    ) 
  }

}


 