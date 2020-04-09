import {AppareilComponent} from '../appareil/appareil.component';
import {Appareil} from './appareil';
import {Subject} from 'rxjs';

export class AppareilService {


  appareilsSubject: Subject<Appareil[]>;
  private _appareils: Appareil[];

  constructor() {
    this.appareilsSubject = new Subject<Appareil[]>();
    this._appareils = [
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
  get appareils(): Appareil[] {
    return this._appareils;
  }

  emitAppareilSubject(): void{
    this.appareilsSubject.next(this.appareils.slice());
    console.log(this._appareils);
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
    this.emitAppareilSubject();
  }

  switchOffAll(): void{
    for (const appareil of this.appareils){
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();

  }

  switchOnOne(i: number): void{
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();

  }
  switchOffOne(i: number): void{
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }
}
