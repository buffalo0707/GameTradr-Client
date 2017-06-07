import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @Input() games: any
  @Input() owner: string
  constructor() { }

  ngOnInit() {
  }
  userOwned(){
    let currentUser = JSON.parse(localStorage.getItem('currentUser')).user
    console.log('user id is', currentUser.id)
    console.log('owner id is', this.owner)
    return currentUser.id === this.owner
  }
}
