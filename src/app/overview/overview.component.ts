import { Component } from '@angular/core';
import { SurvivorService } from '../survivor.service';

@Component({
  selector: 'survivor-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})

export class SurvivorOverviewComponent {
  database: any;

  constructor(private survivor: SurvivorService) {
    this.database = survivor.database;
  }
}
