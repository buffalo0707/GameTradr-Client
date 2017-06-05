import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment'

@Injectable()
export class ListingService {
  private apiUrl = `${environment.apiUrl}/listings`;
  private selectedItem: any;
  constructor(private http: Http) { }

  getListings(): Observable<Response> {
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json());
  }

  onListingsRetrieved(callback: any): void {
  this.getListings().subscribe(callback);
  }

  getListing(id): Observable<Response> {
    console.log('id', id)
    return this.http.get(`${this.apiUrl}/${id}`)
    .map((res:Response) => res.json());
  }

  create(listing): Observable<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + JSON.parse(localStorage.getItem('currentUser')).user.token)
    return this.http.post(this.apiUrl, JSON.stringify(listing), { headers })
    .map((res:Response) => res.json());
  }

  delete(id): Observable<Response> {
    let headers = new Headers();
    headers.append('Authorization', 'Token token=' + JSON.parse(localStorage.getItem('currentUser')).user.token)
    return this.http.delete(`${this.apiUrl}/${id}`, { headers })
    .map((res:Response) => res.json());
  }

  editListing(listing): Observable<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + JSON.parse(localStorage.getItem('currentUser')).user.token)
    return this.http.patch(`${this.apiUrl}/${listing.listing.id}`, JSON.stringify(listing), { headers })
    .map((res:Response) => res.json());
  }

}
