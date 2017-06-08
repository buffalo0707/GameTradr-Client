import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OfferService } from './services/offer/offer.service';


@Injectable()
export class OfferGuard implements CanActivate {
  constructor(private router: Router,
              private offerService: OfferService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.isEmpty(this.offerService.getListing())){
        this.router.navigate(['/listings'], { queryParams: { returnUrl: state.url }});
          return false;
      }

      return true;
  }

isEmpty(myObject) {
    for(var key in myObject) {
        if (myObject.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

}
