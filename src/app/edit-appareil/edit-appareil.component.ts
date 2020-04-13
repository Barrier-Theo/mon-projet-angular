import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AppareilComponent} from '../appareil/appareil.component';
import {Appareil} from '../services/appareil';
import {AppareilService} from '../services/appareil.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})

export class EditAppareilComponent implements OnInit {

  defaultOnOff: string;
  constructor(private appareilService: AppareilService, private router: Router) { }

  ngOnInit(): void {
    this.defaultOnOff = 'éteint';
  }

  onSubmit(form: NgForm): void {
    const name = form.value.name;
    const status = form.value.status;
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['/appareils']);
  }
}
