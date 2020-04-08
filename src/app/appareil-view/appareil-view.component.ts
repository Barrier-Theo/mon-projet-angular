import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  lastUpdate: Promise<Date>;
  date: Date;
  isAuth: boolean;
  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(() => this.isAuth = true, 1000);
  }

  ngOnInit(){
    this.appareils = this.appareilService.appareils;
    this.date = new Date();
    this.lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(() => resolve(date), 2000);
    });
    this.isAuth = false;
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    if (confirm('Etes-vous sûr de vouloir étindre tous vos appareils ?')){
      this.appareilService.switchOffAll();
    } else {
      return null;
    }

  }

}
