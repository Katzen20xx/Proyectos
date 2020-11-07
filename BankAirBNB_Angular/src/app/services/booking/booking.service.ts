import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IBooking } from 'src/app/shared/models/booking.model';
import { IBookingResponse } from 'src/app/shared/models/bookingResponse.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private urlAPI: string = environment.urlBase;

  constructor(private httpClient: HttpClient) { }


private handlerError(error: HttpErrorResponse) {
  console.error('Http error', error);
  return throwError(`Error calling API ${error.message}`);
}

public makeBooking(booking: IBooking): Observable<IBookingResponse> {
  const url = `${this.urlAPI}/booking`;
  return this.httpClient.post<IBookingResponse>(url, booking).pipe(
    retry(2), catchError(this.handlerError) 
  )
}

}
