import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { headline } from './headline';
import { response } from './response'
import { Observable, of } from 'rxjs';

import { catchError,tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'X-Api-Key': '42e8fb22b1cb4cdebc90d4e722c27bb2' })
};

const news_api_url = 'https://newsapi.org/v2/top-headlines';

@Injectable({
  providedIn: 'root'
})
export class HeadlinesService { 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // resp:response;

  getNewsHeadline(category:string):Observable<response>{
    if(category=='Home'){
      category='';
    }
      let categoryUrl=news_api_url+"?country=in&category="+category;
    return this.http.get<response>(categoryUrl,httpOptions)
    .pipe(tap(_=>console.log('fetched response')),catchError(this.handleError('getNewsHeadline',null)));
  }

  constructor(private http: HttpClient,) { }

}
