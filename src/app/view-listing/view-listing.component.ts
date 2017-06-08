import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
import { AlertService } from '../services/alert/alert.service'
import { OfferService } from '../services/offer/offer.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-view-listing',
  templateUrl: './view-listing.component.html',
  styleUrls: ['./view-listing.component.css']
})
export class ViewListingComponent implements OnInit {

  listing: any = {
    game:  {},
    wanted: [],
  }
  offers: any=[]
  loading: false
  offeredGame: any={}
  constructor(
    private listingService: ListingService,
    private offerService: OfferService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.listingService.getListing(params['id']))
        .subscribe((data: any) => {
          this.listing = data.listing
          this.offerService.onListingOffersRetrieved(this.listing.id, (data)=>{
            this.offers = data.offers
            console.log('offers is', this.offers)
          })
    })
  }
  onDeleteSelected(game){
    if(this.listing.wanted.length === 1){
      this.alertService.error("Sorry, every listing must have at least one Wanted Game!")

      return
    }
    this.listing.wanted.splice(this.listing.wanted.indexOf(game),1)
    const listing: any = {
      listing: this.listing
    }
    this.listingService.editListing(listing)
    .subscribe(
      error => {
        console.log(error)
      })
  }
  deleteListing(){
    this.listingService.delete(this.listing._id)
    .subscribe(
      res => {
        this.router.navigate(['listings'])
      },
      error => {
        console.log(error)
      })
  }
  userOwned(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser')).user
    return currentUser.id === this.listing._owner
  }
  onTradeSelected(game){
    this.offerService.setListing(this.listing)
    this.offerService.setOfferedGame(game)
    this.router.navigate(['offers/new'])
  }
  declineOffer(offer){
    offer.status = "declined"
    this.offerService.updateOffer(offer)
    .subscribe(
      res => {
        let index = this.offers.indexOf(offer)
        this.offers.splice(index,1)
      },
      error => {
        console.log(error)
      })
  }

}
