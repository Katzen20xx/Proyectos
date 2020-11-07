import { Injectable } from '@angular/core';
import { IExperienceResponse } from 'src/app/shared/models/experiencesResponse.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { ITopFiveResponse } from 'src/app/shared/models/topFiveResponse.model';
import { IDetailResponse } from 'src/app/shared/models/detailResponse.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private urlAPI: string = environment.urlBase;
  
  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError(`Error calling API ${error.message}`);
  }

  public getExperiences (): Observable<IExperienceResponse> {
    const url = `${this.urlAPI}/experiences`;
    return this.httpClient.get<IExperienceResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );    
  }

  public getTopFive (): Observable<ITopFiveResponse> {
    const url = `${this.urlAPI}/experiences/top5`;
    return this.httpClient.get<ITopFiveResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );    
  }

  public getExperienceById (id: string): Observable<IDetailResponse> {
    const url = `${this.urlAPI}/experiences/detail/${id}`;
    return this.httpClient.get<IDetailResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );    
  }
}
