import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common'

const endpoint = 'http://localhost:3000/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RestService {
 private adjustment = 2 ;
  constructor(private http: HttpClient,public datepipe: DatePipe) { }
 
  private extractData(res: Response) {
    let body = res['data'];
    return body || { };
  }

  private extractCurrentSalatData(res: Response) {
    let body = res['data']['timings'];
    return body || { };
  }

  getProducts(): Observable<any> {
    return this.http.get(endpoint + 'products').pipe(
      map(this.extractData));
  }
  
  getProduct(id): Observable<any> {
    return this.http.get(endpoint + 'products/' + id).pipe(
      map(this.extractData));
  }

  getDateInformation(): Observable<any> {
    var curentDate = new Date();
    var dateString = this.datepipe.transform(curentDate, 'dd-MM-yyyy');
    var url ='http://api.aladhan.com/v1/gToH?date=' + dateString +'&adjustment='+this.adjustment;
    return this.http.get(url).pipe(
      map(this.extractData));
  }

  getSalatInformation(): Observable<any> {
    var curentDate = new Date();
    var dateString = this.datepipe.transform(curentDate, 'dd-MM-yyyy');
    var url ='https://api.aladhan.com/timingsByAddress/'+dateString+'?address=Beancon,FRANCE&method=12';
    return this.http.get(url).pipe(
      map(this.extractCurrentSalatData));
  }
  addProduct (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }
  
  updateProduct (id, product): Observable<any> {
    return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

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
}
