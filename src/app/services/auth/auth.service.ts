import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment'

@Injectable()
export class AuthService {
  user: any={}
  private apiUrl = environment.apiUrl;
  constructor(private http: Http) { }

  login(body: any): Observable<Response> {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      const updateUrl = `${this.apiUrl}/sign-in`;
      return this.http.post(updateUrl, JSON.stringify(body), { headers })
      .map((res:Response) => res.json());
    }

  logout(user) {
    const deleteUrl = `${this.apiUrl}/sign-out/${user.id}`;
    let headers = new Headers();
    headers.append('Authorization', `Token token=${user.token}`);
    return this.http.delete(deleteUrl, {headers})
      .map((res:Response) => res.json());
  }

  register(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const registerUrl = `${this.apiUrl}/sign-up`;
    return this.http.post(registerUrl, JSON.stringify(user), { headers })
    .map((res:Response) => res.json());
  }

  changePassword(password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let currentUser = JSON.parse(localStorage.getItem('currentUser')).user
    headers.append('Authorization', `Token token=${currentUser.token}`)
    const passwordURL = `${this.apiUrl}/change-password/${currentUser.id}`;
    return this.http.patch(passwordURL, JSON.stringify(password), { headers })
    .map((res:Response) => res.json());
  }
}
