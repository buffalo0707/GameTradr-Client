import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
import { OfferService } from '../services/offer/offer.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings = []
  listingOffers = []
  myListings = false
  newOffers = []
  constructor(
    private listingService: ListingService,
    private offerService: OfferService,
    private router: Router) { }

    ngOnInit() {
      this.listingService.onListingsRetrieved((data) =>{
        this.listings = data.listings
        })
      }


    getListing(listing) {
      this.router.navigate(['view-listing', listing.id]);
    }

    loggedIn() {
      return localStorage.getItem('currentUser') !== null
    }
    showMyListings(){
      this.listingService.onMyListingsRetrieved((data)=>{
        this.listings = data.listings
        this.myListings = true
        this.listings.forEach((listing)=>{
          this.offerService.onListingOffersRetrieved(listing.id, (data)=>{
            this.listingOffers = data.offers
          })
      })
    })
    }
    showAllListings(){
      this.ngOnInit()
      this.myListings = false
    }
    hasOffers(listing){
      const result = this.listingOffers.some((offer, index, array)=>{
        return offer._listing === listing.id && offer.status ==='new'
      })
      return result
    }
}
