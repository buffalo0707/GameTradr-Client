import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GameService {
  private systemURL = 'http://localhost:4741/platforms';
  private gameURL = 'http://localhost:4741/games';
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
