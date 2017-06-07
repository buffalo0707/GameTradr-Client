import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment'

@Injectable()
export class OfferService {
  listing={}
  offeredGame={}
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
}
