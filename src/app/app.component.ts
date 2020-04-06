import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-angular';
  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinateur';
  lastUpdate = new Date();
  appareils = [
    {
      name : 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  isAuth = false;

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 1000
    );
  }

  onAllumer(){
    console.log('On allume tout');
  }
}
