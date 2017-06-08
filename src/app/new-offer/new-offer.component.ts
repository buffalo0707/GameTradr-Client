import { Component, OnInit, Input } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
import { OfferService } from '../services/offer/offer.service'
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'
@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {
  listing: any={}
  offeredGame: any={}
  loading = false
  constructor(
      private listingService: ListingService,
      private offerService: OfferService,
      private router: Router,
      private _location: Location) { }

  ngOnInit() {
      this.listing = this.offerService.getListing()
      this.offeredGame = this.offerService.getOfferedGame()
      }

  onCancel(){
    this.router.navigate(['listings'])
  }
  onTrade(){
    this.loading = true
    this.offerService.createOffer()
    .subscribe(
      res => {
        this.loading = false
        this.router.navigate(['offers']);
      },
      error => {
        console.log(error)
        this.loading = false
      }
    )
  }


}
