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
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json());
  }

  onOffersRetrieved(callback: any): void {
  this.getOffers().subscribe(callback);
  }
}
