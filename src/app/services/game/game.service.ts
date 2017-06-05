import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GameService {
  private apiUrl = 'http://localhost:4741/platforms';
  constructor(private http: Http) { }

  getSystems(): Observable<Response> {
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json());
  }

  onSystemsRetrieved(callback: any): void {
  this.getSystems().subscribe(callback);
  }


}
