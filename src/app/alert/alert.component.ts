import { Component, OnInit } from '@angular/core';

import { AlertService } from '../services/alert/alert.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent {
    message: any;
public n: number = 1;
    constructor(
      private alertService: AlertService
      ) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
}
