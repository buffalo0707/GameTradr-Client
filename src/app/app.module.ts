import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './services/auth/auth.service';
import { ListingService } from './services/listing/listing.service';
import { GameService } from './services/game/game.service';
import { OfferService } from './services/offer/offer.service';
import { AlertService } from './services/alert/alert.service';

import { AuthGuard } from './auth.guard';
import { OfferGuard } from './offer.guard';

import { PasswordComponent } from './password/password.component';
import { ListingsComponent } from './listings/listings.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { GamePickerComponent } from './game-picker/game-picker.component';
import { ViewListingComponent } from './view-listing/view-listing.component';
import { GameListComponent } from './game-list/game-list.component';
import { NewOfferComponent } from './new-offer/new-offer.component';
import { OffersComponent } from './offers/offers.component';
import { AlertComponent } from './alert/alert.component';
import { ViewOfferComponent } from './view-offer/view-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    ListingsComponent,
    NewListingComponent,
    EditListingComponent,
    GamePickerComponent,
    ViewListingComponent,
    GameListComponent,
    NewOfferComponent,
    OffersComponent,
    AlertComponent,
    ViewOfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, ListingService, GameService, OfferService, AlertService, AuthGuard, OfferGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
