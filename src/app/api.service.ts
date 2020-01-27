import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { retry,catchError, tap, map } from 'rxjs/operators'; 

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

  public get() {   
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  } 
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  updateData(newloginData): void {  
    const url = `${this.SERVER_URL}/${newloginData.id}`;
    
    console.log(url); 
    return
    // return this.httpClient.put(url, JSON.stringify(newloginData), this.httpOptions).pipe(
    //   alert();
    //   // retry(1),
    //   // catchError(this.handleError)
    // );
 
    // return this.httpClient.put(url, newloginData, this.httpOptions).pipe(
    //   alert()
    // );

    
    // this.httpClient.post(url, newloginData).subscribe(data => {
    //   console.log(data);
    //   // this.username = newloginData.username;
    // });

    
  }
  // public updateData(newloginData) {
  //   console.log(newloginData);
  //   // const url = `${this.apiurl}/${user.id}`;
  //   // return this.http.put<User>(this.apiurl, user, this.httpOptions).pipe(
  //   //   map(() => user),
  //   //   catchError(this.handleError)
  //   // );
  // }
 

  deleteData (id: string) {     
    const url = `${this.SERVER_URL}/${id}/`;
    
    return this.httpClient.delete(url).pipe(
      catchError(this.handleError)
    ); 
  }
  
}
