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
    wanted: []
  }
  searchName: any
  searchWantedName: any
  games: any = []
  wantedGames: any = []
  loading = true
  disableGame = true
  disableWantedGame = true
  gameSelected = false
  hideButton = true
  hideList = true
  constructor(
    private listingService: ListingService,
    private gameService: GameService,
    private router: Router) { }

    ngOnInit() {
    }

  onCreate() {
    this.listing.wanted = this.wantedGames
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

  onSelected(game){
    this.listing.game = game
    this.gameSelected = true
    console.log(this.listing)
    this.wantedGames.push(1)
  }
  onWantedSelected(game){
    if(this.wantedGames[0] === 1){
      this.wantedGames.splice(0,1)
    }
    this.hideList = false
    this.wantedGames.push(game)
    this.hideButton = false
    console.log(this.wantedGames)
    }

  addWantedgame(){
    this.wantedGames.push()
    this.hideButton = true
  }

  onWantedGameSelectionChange(game){
    this.listing.wanted.name = game.GameTitle
  }

  onDeleted(game){
    this.wantedGames.splice(this.wantedGames.indexOf(game),1)
    if(this.wantedGames.length === 0){
      this.wantedGames.push(1)
    }
    console.log('wantedgames', this.wantedGames)
  }

  onCancel(){
    this.router.navigate(['listings']);
  }

}
