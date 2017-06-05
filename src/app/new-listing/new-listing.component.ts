import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit {
  listing: any = {
    game:  {},
    wanted: {}
  }
  loading: false
  constructor(
    private listingService: ListingService,
    private router: Router) { }

  ngOnInit() {
  }

  onCreate() {
    this.listingService.create(this.listing)
      .subscribe(
        res => {
          console.log(res)
          this.loading = false
          this.router.navigate(['listings']);
        },
        error => {
          console.log(error)
          this.loading = false
        }
      )
  }
}
