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
  constructor(
    private listingService: ListingService,
    private router: Router) { }

    ngOnInit() {
      this.listingService.onListingsRetrieved((data) =>{
        this.listings = data.listings
      })
    }

    onDelete(listing) {
      this.listingService.delete(listing.id)
      .subscribe(
        res => {
          this.ngOnInit()
        },
        error => {
          console.log(error)
        })
    }
    onEdit(listing) {
      this.router.navigate(['edit-listing', listing.id]);
    }

    loggedIn() {
      return localStorage.getItem('currentUser') !== null
    }
}
