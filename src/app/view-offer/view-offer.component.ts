import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
import { AlertService } from '../services/alert/alert.service'
import { OfferService } from '../services/offer/offer.service'
import { AuthService } from '../services/auth/auth.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.css']
})
export class ViewOfferComponent implements OnInit {
  offer :any = {}
  user :any = {}
  constructor(
    private listingService: ListingService,
    private offerService: OfferService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router,
    private location: Location) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.offerService.getOffer(params['id']))
      .subscribe((data: any) => {
        this.offer= data.offer
        this.authService.getUser(this.offer._owner)
        .subscribe((data: any) => {
          this.user = data.user
          console.log(this.user)
        })
      })
    }
    goBack(){
      this.router.navigate(['offers'])
    }
    cancelOffer(){
      this.offerService.deleteOffer(this.offer.id)
      .subscribe(
        res => {
          this.router.navigate(['offers'])
        },
        error => {
          console.log(error)
        })
    }
}
