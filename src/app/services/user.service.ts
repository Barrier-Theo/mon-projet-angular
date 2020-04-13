import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {User} from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[];
  userSubject: Subject<User[]>;

  constructor() {
    this.users = [new User('Théo', 'Barrier', 'theo.barrier@hotmail.fr', 'coca', ['angular', 'sports']) ];
    this.userSubject = new Subject<User[]>();
  }

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User): void{
    this.users.push(user);
    this.emitUsers();
  }
}
