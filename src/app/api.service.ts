import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { retry,catchError, tap, map, takeUntil } from 'rxjs/operators'; 
// import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public first: string = "";  
  public prev: string = "";  
  public next: string = "";  
  public last: string = "";

  private SERVER_URL = "http://localhost:3000/login"; 
  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  parseLinkHeader(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });
  }

  public getUserData() {  
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  } 
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  updateData(newloginData): void {  
    const url = `${this.SERVER_URL}/${newloginData.id}`;  

    this.httpClient.put(url,
      {
        "username": newloginData.username,
        "password": newloginData.password,
        "DOB": newloginData.DOB
      })
      .subscribe(
        result => {
                     1;
                  },
        error  => {
          console.log("Error", error);
        }
      );      
  } 

  deleteData (id: string) {     
    const url = `${this.SERVER_URL}/${id}/`;
    
    return this.httpClient.delete(url).pipe(
      catchError(this.handleError)
    ); 
  }
  
}
