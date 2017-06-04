import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
  private apiUrl = 'http://localhost:4741';
  constructor(private http: Http) { }

  post(body: any): Observable<Response> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const updateUrl = `${this.apiUrl}/sign-in`;
      return this.http.post(updateUrl, JSON.stringify(body), { headers })
      .map((res:Response) => res.json());
    }
}
