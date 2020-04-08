import {AppareilComponent} from '../appareil/appareil.component';

export class AppareilService {

  appareils = [
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

  getAppareilById(id: number): object {
    const appareil = this.appareils.find(
      (a) => {
        return a.id === id;
      }
    );
    return appareil;
  }

  switchOnAll(){
    for (const appareil of this.appareils){
      appareil.status = 'allumé';
    }
  }

  switchOffAll(){
    for (const appareil of this.appareils){
      appareil.status = 'éteint';
    }
  }

  switchOnOne(i: number){
    this.appareils[i].status = 'allumé';
  }
  switchOffOne(i: number){
    this.appareils[i].status = 'éteint';
  }
}
