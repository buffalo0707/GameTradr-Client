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
    return this.http.get(`${this.apiUrl}/?status=active`)
    .map((res:Response) => res.json());
  }

  getMyListings(): Observable<Response> {
    let ownerID = JSON.parse(localStorage.getItem('currentUser')).user.id
    let headers = new Headers();
    headers.append('Authorization', 'Token token=' + JSON.parse(localStorage.getItem('currentUser')).user.token)
    return this.http.get(`${this.apiUrl}/?owner=${ownerID}`,{headers})
    .map((res:Response) => res.json());
  }

  onListingsRetrieved(callback: any): void {
  this.getListings().subscribe(callback);
  }

  onMyListingsRetrieved(callback: any): void {
  this.getMyListings().subscribe(callback);
  }

  getListing(id): Observable<Response> {
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
    return this.http.patch(`${this.apiUrl}/${listing.id}`, JSON.stringify(listing), { headers })
    .map((res:Response) => res.json());
  }

}
