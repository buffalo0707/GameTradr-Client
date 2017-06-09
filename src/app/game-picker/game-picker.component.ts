import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ListingService } from '../services/listing/listing.service'
import { GameService } from '../services/game/game.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert/alert.service'

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
  systems = ["Nintendo 3DS", "Nintendo DS", "Nintendo Switch", "Microsoft Xbox 360",
            "Microsoft Xbox One", "Sony Playstation 3", "Sony Playstation 4",
            "Sony Playstation Vita"]
  games: any = []
  visible = true
  deleted = false
  loading = false
  constructor(
    private listingService: ListingService,
    private gameService: GameService,
    private alertService: AlertService,
    private router: Router) { }


  ngOnInit() {
  }

  enableGame(){
    this.disableGame = false
    this.games = []
  }
  gameSearch(){
    this.alertService.clearAlert()
    this.loading = true
    let query = {}
    query['system']= this.game.system
    query['name']=this.searchName
    this.gameService.onGamesRetrieved(query, (data: any) =>{
      if(data.Data===""){
        this.alertService.error("No games found :( Try again!")
        this.loading = false
        return
      }
      if(data.Data == Array){
        this.games = data.Data.Game
        this.loading = false
        return
      } else {
        this.games.push(data.Data.Game)
        this.loading = false
      }



    })
  }
  onGameSelectionChange(game){
    this.game.name = game.GameTitle
    this.game.id = game.id
    this.onSelected.emit(this.game)
    this.visible = false
  }
  onDelete(game){
    this.onDeleted.emit(game)
    this.deleted = true
  }
}
