import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game/game.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-system-list',
  templateUrl: './system-list.component.html',
  styleUrls: ['./system-list.component.css']
})
export class SystemListComponent implements OnInit {
  systems: any = []
  constructor(
    private gameService: GameService,
    private router: Router) { }

    ngOnInit() {
      this.gameService.onSystemsRetrieved((data: any) =>{
        this.systems = data.Data.Platforms.Platform
        console.log(this.systems)
      })
    }

}
