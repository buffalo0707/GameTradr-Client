import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @Input() games: any
  @Input() owner: string
  @Output() onTradeSelected = new EventEmitter<any>()
  @Output() onDeleteSelected = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  userOwned(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser')).user
    return currentUser.id === this.owner
  }
  onTradeSelect(game){
    this.onTradeSelected.emit(game)
  }
  onDeleteSelect(game){
    this.onDeleteSelected.emit(game)
  }
}
