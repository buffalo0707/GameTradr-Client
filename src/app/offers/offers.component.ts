import { Component, OnInit, Input } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
import { OfferService } from '../services/offer/offer.service'
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers :any=[]
  constructor(
      private listingService: ListingService,
      private offerService: OfferService,
      private router: Router,
      private _location: Location) { }

  ngOnInit() {
    this.offerService.onMyOffersRetrieved((data) =>{
      this.offers = data.offers
    })
  }
  cancelOffer(id){
    this.offerService.deleteOffer(id)
    .subscribe(
      res => {
        this.ngOnInit()
      },
      error => {
        console.log(error)
      })
  }

}
