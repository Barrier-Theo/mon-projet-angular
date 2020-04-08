import {AppareilComponent} from '../appareil/appareil.component';
import {Appareil} from './appareil';

export class AppareilService {

  appareils: Appareil[];

  constructor() {
    this.appareils = [
      {
        id: 1,
        name : 'Machine à laver',
        status: 'éteint'
      },
      {
        id: 2,
        name: 'Frigo',
        status: 'allumé'
      },
      {
        id: 3,
        name: 'Ordinateur',
        status: 'éteint'
      }
    ];
  }

  getAppareilById(id: number): Appareil {
    const appareil = this.appareils.find(
      (a) => a.id === id);
    return appareil;
  }

  switchOnAll(): void{
    for (const appareil of this.appareils){
      appareil.status = 'allumé';
    }
  }

  switchOffAll(): void{
    for (const appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }

  switchOnOne(i: number): void{
    this.appareils[i].status = 'allumé';
  }
  switchOffOne(i: number): void{
    this.appareils[i].status = 'éteint';
  }
}
