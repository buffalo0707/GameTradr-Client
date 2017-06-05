import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment'

@Injectable()
export class GameService {
  private systemURL = `${environment.apiUrl}/platforms`;
  private gameURL = `${environment.apiUrl}/games`;
  constructor(private http: Http) { }

  getSystems(): Observable<Response> {
    return this.http.get(this.systemURL)
    .map((res:Response) => res.json());
  }

  onSystemsRetrieved(callback: any): void {
  this.getSystems().subscribe(callback);
  }

  getGames(query): Observable<Response> {
    return this.http.get(`${this.gameURL}/?name=${query.name}&platform=${query.system}`)
    .map((res:Response) => res.json());
  }

  onGamesRetrieved(query: any, callback: any): void {
  this.getGames(query).subscribe(callback);
  }


}
