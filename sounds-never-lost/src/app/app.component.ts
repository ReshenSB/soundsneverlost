import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { GoogleService } from './services/auth/google.service';
import { DataTransferService } from './services/data-transfer.service';

declare global {
  interface Window { gapi: any; $: any }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  // title = 'Sounds Never Lost';
  title = 'Hello';

  // showFiller = false;
  profile: {
    ID: string,
    FullName: string,
    GivenName: string,
    FamilyName: string,
    ImageURL: string,
    Email: string
  } | undefined = undefined

  date = new Date

  loaded = false;
  noIsSignedInListener = true;


  GoogleAuthLoaded$: Subscription = new Subscription();
  LoggedIn$: Subscription = new Subscription();

  constructor(
    private dataTransfer: DataTransferService,
    private googleService: GoogleService
  ) { }

  ngOnInit() {
    setInterval(() => { this.date = new Date() }, 1000);

    // this.googleService.Init();

    // this.GoogleAuthLoaded$ = this.dataTransfer.currentGoogleAuthLoaded.subscribe((isLoaded: boolean) => {
    //   this.loaded = isLoaded;
    //   if (isLoaded && this.noIsSignedInListener) {
    //     this.googleService.listen()
    //     this.noIsSignedInListener = false;
    //   }
    // })

    // this.LoggedIn$ = this.dataTransfer.currentLoggedIn.subscribe((signedIn: boolean) => {
    //   console.log('Signed in? ', signedIn)
    //   if (signedIn) this.profile = this.googleService.getProfile();
    //   else this.profile = undefined;
    // })
  }

  ngOnDestroy(): void {
    if (this.GoogleAuthLoaded$) this.GoogleAuthLoaded$.unsubscribe();
    if (this.LoggedIn$) this.LoggedIn$.unsubscribe();
  }


  SignIn() {
    this.googleService.SignIn()
  }

  SignOut() {
    this.googleService.SignOut()
  }


}
