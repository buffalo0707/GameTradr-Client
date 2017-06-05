import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  listing: any = {
    game:  {},
    wanted: {},
  }
  loading: false
  constructor(
    private listingService: ListingService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

    ngOnInit(): void {
        this.route.params
          .switchMap((params: Params) => this.listingService.getListing(params['id']))
          .subscribe((data: any) => {
            this.listing = data.listing
      })}

    onEdit() {
      const listing: any = {
        listing: this.listing
      }
      this.listingService.editListing(listing)
        .subscribe(
          res => {
            this.router.navigate(['listings']);
          },
          error => {
            console.log(error)
          }
        )
    }

}
