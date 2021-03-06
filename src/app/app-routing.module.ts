import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';
import { ListingsComponent } from './listings/listings.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { ViewListingComponent } from './view-listing/view-listing.component';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { OffersComponent } from './offers/offers.component';
import { ViewOfferComponent } from './view-offer/view-offer.component';
import { AuthGuard } from './auth.guard';
import { OfferGuard } from './offer.guard';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home',  component: HomeComponent },
   { path: 'login',  component: LoginComponent },
   { path: 'register',  component: RegisterComponent },
   { path: 'password',  component: PasswordComponent, canActivate: [AuthGuard] },
   { path: 'listings',  component: ListingsComponent },
   { path: 'new-listing',  component: NewListingComponent, canActivate: [AuthGuard] },
   { path: 'edit-listing/:id',  component: EditListingComponent, canActivate: [AuthGuard] },
   { path: 'view-listing/:id',  component: ViewListingComponent, canActivate: [AuthGuard]  },
   { path: 'view-offer/:id',  component: ViewOfferComponent, canActivate: [AuthGuard], pathMatch: 'full'  },
   { path: 'view-offer',  component: OffersComponent, canActivate: [AuthGuard]},
   { path: 'view-listing',  component: ListingsComponent, canActivate: [AuthGuard]},
   { path: 'edit-listing',  component: ListingsComponent, canActivate: [AuthGuard]},
   { path: 'offers/new',  component: NewOfferComponent, canActivate: [AuthGuard, OfferGuard] ,},
   { path: 'offers',  component: OffersComponent, canActivate: [AuthGuard] }

]

@NgModule({
  imports: [ RouterModule.forRoot(routes)

  ],
  exports: [RouterModule

  ]
})
export class AppRoutingModule {

}
