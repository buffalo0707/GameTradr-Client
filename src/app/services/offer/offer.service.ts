import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment'

@Injectable()
export class OfferService {
  private apiUrl = `${environment.apiUrl}/offers`;
  listing:any={}
  offeredGame:any={}
  constructor(private http: Http) { }

  setListing(listing){
    this.listing = listing
  }
  setOfferedGame(game){
    this.offeredGame = game
  }
  getListing(){
    return this.listing
  }
  getOfferedGame(){
    return this.offeredGame
  }
  createOffer(){
    const offer = {
      _listing: this.listing.id,
      game: this.listing.game,
      offeredGame: this.offeredGame
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + JSON.parse(localStorage.getItem('currentUser')).user.token)
    return this.http.post(this.apiUrl, JSON.stringify(offer), { headers })
    .map((res:Response) => res.json());
  }
  getOffers(): Observable<Response> {
    let headers = new Headers();
    headers.append('Authorization', 'Token token=' + JSON.parse(localStorage.getItem('currentUser')).user.token)
    return this.http.get(this.apiUrl, {headers})
    .map((res:Response) => res.json());
  }

  onOffersRetrieved(callback: any): void {
  this.getOffers().subscribe(callback);
  }
  getMyOffers(): Observable<Response> {
    let ownerID = JSON.parse(localStorage.getItem('currentUser')).user.id
    let headers = new Headers();
    headers.append('Authorization', 'Token token=' + JSON.parse(localStorage.getItem('currentUser')).user.token)
    return this.http.get(`${this.apiUrl}/?owner=${ownerID}`,{headers})
    .map((res:Response) => res.json());
  }
  onMyOffersRetrieved(callback: any): void {
  this.getMyOffers().subscribe(callback);
  }
  deleteOffer(id): Observable<Response> {
    let headers = new Headers();
    headers.append('Authorization', 'Token token=' + JSON.parse(localStorage.getItem('currentUser')).user.token)
    return this.http.delete(`${this.apiUrl}/${id}`, { headers })
    .map((res:Response) => res.json());
  }

  getListingOffers(id): Observable<Response> {
    let headers = new Headers();
    headers.append('Authorization', 'Token token=' + JSON.parse(localStorage.getItem('currentUser')).user.token)
    return this.http.get(`${this.apiUrl}/listingOffer/${id}`, {headers})
    .map((res:Response) => res.json());
  }
  onListingOffersRetrieved(id, callback: any): void {
  this.getListingOffers(id).subscribe(callback);
  }
  updateOffer(offer): Observable<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token token=' + JSON.parse(localStorage.getItem('currentUser')).user.token)
    return this.http.patch(`${this.apiUrl}/${offer.id}`, JSON.stringify({status: offer.status}), { headers })
    .map((res:Response) => res.json());
  }
  getOffer(id): Observable<Response> {
    return this.http.get(`${this.apiUrl}/${id}`)
    .map((res:Response) => res.json());
  }

}
