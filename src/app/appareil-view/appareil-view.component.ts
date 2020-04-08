import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {


  //a déménager après

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
        resolve(date);
      }, 2000
    );
  });
  date = new Date();
  arrayPosts = [
    {
      title: 'Premier post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié.',
      loveIts: 0,
      created_at: this.date,
    },
    {
      title: 'Deuxième post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié.',
      loveIts: 0,
      created_at: this.date
    },
    {
      title: 'Troisième  post',
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n\'a pas fait que survivre cinq siècles, mais s\'est aussi adapté à la bureautique informatique, sans que son contenu n\'en soit modifié.',
      loveIts: 0,
      created_at: this.date
    }
  ];

  //Fin du déménagement à faire.

  isAuth = false;
  appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 1000
    );
  }

  ngOnInit(){
    // askip pas ouf la liaison directe à un array
    this.appareils = this.appareilService.appareils;
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
