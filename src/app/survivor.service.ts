import { Injectable } from '@angular/core';

@Injectable()
export class SurvivorService {
  database = {
    1: {
      seasonNumber: 1,
      seasonName: 'Survivor: Borneo',
      location: {
        city: 'Borneo',
        country: 'Malaysia'
      },
      winner: 'Richard Hatch',
      runnersUp: ['Kelly Wiglesworth'],
      initialTribes: [{
        name: 'Tagi',
        color: '#FF9900'
      }, {
        name: 'Pagong',
        color: '#FFE105'
      }],
      mergedTribe: {
        name: 'Rattana',
        color: '#7CFC00'
      },
      cast: [{
        name: 'Sonja Chrostopher',
        ageAtTime: 63,
        from: {
          city: 'Walnut Creek',
          state: 'CA'
        },
        daysInGame: 3,
        tribe: 'Tagi',
        merged: false,
        personality: {},
        quit: false
      }]
    }
  };

  constructor() {}
}
