import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
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
  loading: false
  offeredGame: any={}
  constructor(
    private listingService: ListingService,
    private offerService: OfferService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
      this.route.params
        .switchMap((params: Params) => this.listingService.getListing(params['id']))
        .subscribe((data: any) => {
          this.listing = data.listing
          console.log(this.listing)
    })}
  deleteGame(game){
    this.listing.wanted.splice(this.listing.wanted.indexOf(game),1)
    const listing: any = {
      listing: this.listing
    }
    this.listingService.editListing(listing)
    .subscribe(
      res => {
        console.log(res)
      },
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
    console.log('user id is', currentUser.id)
    console.log('owner id is', this.listing._owner)
    return currentUser.id === this.listing._owner
  }
  makeOffer(){
    this.router.navigate(['offer'])
  }
  onTradeSelected(game){
    this.offerService.setListing(this.listing)
    this.offerService.setOfferedGame(game)
    this.router.navigate(['offer'])
  }

}
