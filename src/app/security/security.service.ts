import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  isAuthorized(): boolean{
      return true;
  }

  getRole(): string{
      return 'admin';
  }
}
