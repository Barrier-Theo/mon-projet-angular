import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Appareil} from '../services/appareil';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  lastUpdate: Promise<Date>;
  date: Date;
  isAuth: boolean;
  appareils: Appareil[];
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) {
    setTimeout(() => this.isAuth = true, 1000);
  }

  ngOnInit(): void{
    this.appareils = this.appareilService.appareils;
    this.date = new Date();
    this.lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(() => resolve(date), 2000);
    });
    this.isAuth = false;
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe((appareils: any[]) => this.appareils = appareils);
    this.appareilService.emitAppareilSubject();
  }

  onAllumer(): void{
    this.appareilService.switchOnAll();
  }

  onEteindre(): void{
    if (confirm('Etes-vous sûr de vouloir étindre tous vos appareils ?')){
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  ngOnDestroy(): void {
    this.appareilSubscription.unsubscribe();
  }

  onSave(): void {
    this.appareilService.saveAppareilsTOServer();
  }

}
