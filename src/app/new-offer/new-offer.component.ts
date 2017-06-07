import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {
  @Input() listing: any
  @Input() offeredGame: any
  constructor() { }

  ngOnInit() {
  }



}
