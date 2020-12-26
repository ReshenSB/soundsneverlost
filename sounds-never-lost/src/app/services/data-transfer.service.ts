import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  private LoggedIn = new BehaviorSubject(false);
  private GoogleAuthLoaded = new BehaviorSubject(false);

  currentLoggedIn = this.LoggedIn.asObservable();
  currentGoogleAuthLoaded = this.GoogleAuthLoaded.asObservable();

  changeLoggedIn(message: boolean) {
    this.LoggedIn.next(message)
  }

  changeGoogleAuthLoaded(message: boolean) {
    this.GoogleAuthLoaded.next(message)
  }


}
