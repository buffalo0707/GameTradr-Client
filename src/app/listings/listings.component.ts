import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  listings = []
  myListings = false
  constructor(
    private listingService: ListingService,
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
      })
    }
    showAllListings(){
      this.ngOnInit()
      this.myListings = false
    }
}
