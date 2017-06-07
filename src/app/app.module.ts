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

import { PasswordComponent } from './password/password.component';
import { ListingsComponent } from './listings/listings.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { GamePickerComponent } from './game-picker/game-picker.component';
import { ViewListingComponent } from './view-listing/view-listing.component';

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
    ViewListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService, ListingService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
