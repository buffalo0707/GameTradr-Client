import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ListingService {
  private apiUrl = 'http://localhost:4741/listings';
  private selectedItem: any;
  constructor(private http: Http) { }

  get(): Observable<Response> {
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json());
  }

  onListingsRetrieved(callback: any): void {
  this.get().subscribe(callback);
}

}
