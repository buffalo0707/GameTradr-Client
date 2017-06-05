import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
import { GameService } from '../services/game/game.service'
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
  systems: any = []
  loading: false
  constructor(
    private listingService: ListingService,
    private gameService: GameService,
    private router: Router) { }

    ngOnInit() {
      this.gameService.onSystemsRetrieved((data: any) =>{
        this.systems = data.Data.Platforms.Platform
        console.log(this.systems)
      })
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
