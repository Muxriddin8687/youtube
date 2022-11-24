import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login (form: {login: string, password: string}) {
    localStorage.setItem('auth', form.login);
  }
}
