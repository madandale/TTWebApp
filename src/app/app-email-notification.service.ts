import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AppConstants } from './app.constants';
import { tap } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'text/plain; charset=utf-8', 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
	})
};

@Injectable({
  providedIn: 'root'
})

export class AppEmailNotificationService {


  private emailURL = AppConstants.EmailURL;

  constructor(
    private http: HttpClient  ) { }
    
    // sendEmail(groupType: UserGroup): Observable<UserGroup> {
    //   return this.http
    //     .post<UserGroup>(this.baseApi + 'create', groupType, httpOptions)
    //     .pipe(
    //       tap(response => this.ifGroupResponse(response))
    //     );
    // }
  
}


export class EmailResponse {
	'status': number;
	'message': string;
}