import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {id: 100, name: 'Satish'},
    {id: 101, name: 'RSK'},
    {id: 102, name: 'Renu'}
  ]
  constructor() { }
  getUser(){
    return of({id: 102})
  }
  userName(id: any){
     let userIndex = this.users.findIndex((user: any) => user.id == id)
     if(userIndex > -1){
      return of(this.users[userIndex])
     }
     return throwError(() => 'User Not Found')
  }
}
