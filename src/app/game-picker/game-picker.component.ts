import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
import { GameService } from '../services/game/game.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-picker',
  templateUrl: './game-picker.component.html',
  styleUrls: ['./game-picker.component.css']
})
export class GamePickerComponent implements OnInit {
  @Output() onSelected = new EventEmitter<any>()
  @Output() onDeleted = new EventEmitter<any>()
  disableGame=true
  game: any={}
  searchName: string
  systems = ["Microsoft Xbox 360", "Nintendo Switch", "Sony Playstation 4"]
  games: any = []
  visible = true
  deleted = false
  constructor(
    private listingService: ListingService,
    private gameService: GameService,
    private router: Router) { }


  ngOnInit() {
  }

  enableGame(){
    this.disableGame = false
  }
  gameSearch(){
    let query = {}
    query['system']= this.game.system
    query['name']=this.searchName
    console.log('query is', query)
    this.gameService.onGamesRetrieved(query, (data: any) =>{
      this.games = data.Data.Game
    })
  }
  onGameSelectionChange(game){
    this.game.name = game.GameTitle
    console.log(this.game)
    this.onSelected.emit(this.game)
    this.visible = false
  }
  onDelete(game){
    this.onDeleted.emit(game)
    this.deleted = true
  }
}
