import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment'

@Injectable()
export class OfferService {
  listing :any={}
  offeredGame :any={}
  constructor(private http: Http) { }

}
