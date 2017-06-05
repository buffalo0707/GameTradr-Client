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
  searchName: any
  searchWantedName: any
  systems: any = []
  games: any = []
  wantedGames: any = []
  loading = true
  disableGame = true
  disableWantedGame = true
  constructor(
    private listingService: ListingService,
    private gameService: GameService,
    private router: Router) { }

    ngOnInit() {
      this.gameService.onSystemsRetrieved((data: any) =>{
        this.systems = data.Data.Platforms.Platform
        console.log(this.systems)
        this.loading = false
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

  enableGame(){
    this.disableGame = false
  }

  enableWantedGame(){
    this.disableWantedGame = false
  }

  gameSearch(){
    let query = {}
    query['system']= this.listing.game.system
    query['name']=this.searchName
    console.log('query is', query)
    this.gameService.onGamesRetrieved(query, (data: any) =>{
      this.games = data.Data.Game
    })
  }

  wantedGameSearch(){
    let query = {}
    query['system']= this.listing.wanted.system
    query['name']=this.searchWantedName
    console.log('query is', query)
    this.gameService.onGamesRetrieved(query, (data: any) =>{
      this.wantedGames = data.Data.Game
      console.log(data)
    })
  }

  onGameSelectionChange(game){
    this.listing.game.name = game.GameTitle
    console.log(game)
  }

  onWantedGameSelectionChange(game){
    this.listing.wanted.name = game.GameTitle
  }

}
