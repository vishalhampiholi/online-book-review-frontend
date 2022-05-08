import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookRivewHttpService {

  constructor(private httpClient: HttpClient) { }
  /**
     * Method to get data from API using GET request
     *
     * @param {string} endpoint
     * @param {HttpParams} parameters
     * @param {Map<string, string>} headerArgs
     * @returns {Observable<any>}
     */
    public getData(endpoint: string, parameters?: HttpParams, headerArgs?: Map<string, string>): Observable<any> {
      const headers = headerArgs == null ? new HttpHeaders() : this.setHeaders(headerArgs);
      return this.httpClient.get(environment.BookReviewBaseUrl + endpoint, { headers: headers, params: parameters, withCredentials: false } );
  }

  /**
   * Method to get data and response header from API using GET request
   *
   * @param {string} endpoint
   * @param {HttpParams} parameters
   * @param {Map<string, string>} headerArgs
   * @returns {Observable<any>}
   */
  public getResponse(endpoint: string, parameters?: HttpParams, headerArgs?: Map<string, string>): Observable<any> {
      const headers = headerArgs == null ? new HttpHeaders() : this.setHeaders(headerArgs);
      return this.httpClient.get(environment.BookReviewBaseUrl + endpoint, {
          headers: headers,
          params: parameters,
          observe: 'response',
          withCredentials: true
      });
  }
  /**
   * Method to post data to API using POST request
   *
   * @param {string} endpoint
   * @param body
   * @param {HttpParams} parameters
   * @param {Map<string, string>} headerArgs
   * @param {string} responseType
   * @param {string} observe
   * @returns {Observable<any>}
   */
  public postData(endpoint: string, body?: any, parameters?: HttpParams, headerArgs?: Map<string, string>, responseType?: string,
                  observe?: string): Observable<any> {
      const headers = headerArgs == null ? new HttpHeaders() : this.setHeaders(headerArgs);
      if (observe !== null && observe === 'response') {
          return this.httpClient.post(environment.BookReviewBaseUrl + endpoint, body, {
              headers: headers,
              observe: 'response',
              params: parameters,
              withCredentials: true
          });
      } else {
          return this.httpClient.post(environment.BookReviewBaseUrl + endpoint, body, {
              headers: headers,
              params: parameters,
              withCredentials: true
          });
      }
  }

  /**
   * Method to post data to API using POST request and get an observable response
   *
   * @param {string} endpoint
   * @param body
   * @param {HttpParams} parameters
   * @param {Map<string, string>} headerArgs
   * @returns {Observable<any>}
   */
  public postDataObserveResponse(endpoint: string, body?: any, parameters?: HttpParams,
                                 headerArgs?: Map<string, string>): Observable<any> {
      const headers = headerArgs == null ? new HttpHeaders() : this.setHeaders(headerArgs);
      return this.httpClient.post(environment.BookReviewBaseUrl + endpoint, body, {
          headers: headers,
          observe: 'response',
          withCredentials: true
      });
  }

  /**
   * Method to put data to API using PUT request
   *
   * @param {string} endpoint
   * @param body
   * @param {HttpParams} parameters
   * @param {Map<string, string>} headerArgs
   * @returns {Observable<any>}
   */
  public putData(endpoint: string, body: any, parameters?: HttpParams, headerArgs?: Map<string, string>): Observable<any> {
      const headers = headerArgs == null ? new HttpHeaders() : this.setHeaders(headerArgs);
      return this.httpClient.put(environment.BookReviewBaseUrl + endpoint, body, { headers: headers ,withCredentials: false});
  }

  /**
   * Method to delete data through API using DELETE request
   *
   * @param {string} endpoint
   * @param body
   * @param {HttpParams} parameters
   * @returns {Observable<any>}
   */
  public deleteData(endpoint: string, parameters?: HttpParams): Observable<any> {
      return this.httpClient.delete(environment.BookReviewBaseUrl + endpoint, {params: parameters,withCredentials: true});
  }

  /**
   * Method to send information to API using HEAD request
   *
   * @param {string} endpoint
   * @param {HttpParams} parameters
   * @param {Map<string, string>} headerArgs
   * @returns {Observable<any>}
   */
  public head(endpoint: string, parameters?: HttpParams, headerArgs?: Map<string, string>): Observable<any> {
      const headers = headerArgs == null ? new HttpHeaders() : this.setHeaders(headerArgs);
      return this.httpClient.head(environment.BookReviewBaseUrl + endpoint, { headers: headers, params: parameters, withCredentials: true });
  }

  /**
   * Create a HttpHeaders and sets parameters
   *
   * @param {Map<string, string>} headerArgs
   * @returns {HttpHeaders}
   */
  private setHeaders(headerArgs: Map<string, string>): HttpHeaders {
      let headers: HttpHeaders = new HttpHeaders();
      headerArgs.forEach((value: string, key: string) => {
          headers = headers.append(key, value);
      });
      return headers;
  }}
