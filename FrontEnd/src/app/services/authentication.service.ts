import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authUser(user: any) {
    let UserArray = [];
    let storedUsers = localStorage.getItem('Users');
    if(storedUsers) {
      UserArray = JSON.parse(storedUsers);
    }
    return UserArray.find((p: {userName: string, password: string}) => p.userName === user.userName && p.password === user.password);
  }

}
