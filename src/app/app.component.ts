import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mon-projet-angular';

  secondes: number;
  counter: Observable<number>;
  counterSubscription: Subscription;
  ngOnInit(): void{
    this.secondes = 0;
    this.counter = Observable.interval(1000);
    // Facon d'écrire les 3 fonctions anonyme liées à l'observable. Premiere se déclenche a chaque nouvel envoie de données, la deuxieme si il y a une erreur, la troisieme quand l'observable s'achève.
    this.counterSubscription = this.counter.subscribe(
      (value) => {this.secondes = value; console.log("Test")},
      (error) => console.log('error' + error),
      () => console.log('Observable complete')
    );
  }

  ngOnDestroy(): void {
    //Détruit la souscription === empeche les comportements innatendu liées aux observables infini
    this.counterSubscription.unsubscribe();
  }
}
