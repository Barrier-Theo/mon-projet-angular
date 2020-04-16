import {AppareilComponent} from '../appareil/appareil.component';
import {Appareil} from './appareil';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppareilService {


  appareilsSubject: Subject<Appareil[]>;
  private _appareils: Appareil[];
  appareilObj: Appareil;


  constructor(private httpClient: HttpClient) {
    this.appareilsSubject = new Subject<Appareil[]>();
    this._appareils = [
      {
        id: 1,
        name: 'Machine à laver',
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

  emitAppareilSubject(): void {
    //this.appareilsSubject.next(this.appareils.slice());
    console.log(this._appareils);
  }

  getAppareilById(id: number): Appareil {
    const appareil = this.appareils.find(
      (a) => a.id === id);
    return appareil;
  }

  switchOnAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll(): void {
    for (const appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();

  }

  switchOnOne(i: number): void {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();

  }

  switchOffOne(i: number): void {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string): void {
    this.appareilObj = {
      id: 0,
      name: '',
      status: ''
    };
    this.appareilObj.name = name;
    this.appareilObj.status = status;
    this.appareilObj.id = this.appareils[(this.appareils.length - 1)].id + 1;
    this.appareils.push(this.appareilObj);
    this.emitAppareilSubject();
  }

  saveAppareilsTOServer(): void {
    this.httpClient.put('https://my-project-angular-e2d7f.firebaseio.com/appareils.json', this.appareils).subscribe(
      () => console.log('Enregistrement terminé !'),
      (error) => console.log('Erreur  :' + error)
    );
  }
}
