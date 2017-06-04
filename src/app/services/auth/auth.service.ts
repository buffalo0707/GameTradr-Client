import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
  private apiUrl = 'http://localhost:4741';
  constructor(private http: Http) { }

  login(body: any): Observable<Response> {
      console.log('logging in')
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const updateUrl = `${this.apiUrl}/sign-in`;
      return this.http.post(updateUrl, JSON.stringify(body), { headers })
      .map((res:Response) => res.json());
    }

  logout(user) {
    const deleteUrl = `${this.apiUrl}/sign-out/${user._id}`;
    let headers = new Headers();
    headers.append('Authorization', `Token token=${user.token}`);
    return this.http.delete(deleteUrl, {headers})
      .map((res:Response) => res.json());
  }
}
