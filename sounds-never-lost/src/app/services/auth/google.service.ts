import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataTransferService } from '../data-transfer.service';
import { SharedService } from '../shared.service';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(
    private dataTransfer: DataTransferService,
    private sharedService: SharedService
  ) { }

  async Init() {
    window.$.ajax({
      url: "https://apis.google.com/js/platform.js",
      dataType: "script",
      success: () => {
        window.gapi.load('auth2', async () => {
          const params = { client_id: environment.google_auth_client_id, scope: environment.google_auth_scope };
          window.gapi.auth2.init(params);
        })
      }
    })
    
    let loaded = false;
    do {
      try {
        console.log('trying');
        let loggedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();
        loaded = true;
        this.dataTransfer.changeLoggedIn(loggedIn);
      } catch (err) {
        await this.sharedService.delay(1000)
      }
    } while (!loaded)

    this.dataTransfer.changeGoogleAuthLoaded(loaded);
  }

  SignIn() {

    let GoogleAuth = window.gapi.auth2.getAuthInstance();

    GoogleAuth.signIn({ scope: 'profile email' })
      .then((googleUser: any) => {
        // Useful data for your client-side scripts:
        let profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());

        // The ID token you need to pass to your backend:
        var id_token = googleUser.getAuthResponse().id_token;
        console.log("ID Token: " + id_token);
      })
  }

  SignOut() {
    let GoogleAuth = window.gapi.auth2.getAuthInstance();
    GoogleAuth.signOut()
  }

  getProfile() {
    // let googleUser = window.gapi.auth2.getAuthInstance().currentUser.get()
    // Useful data for your client-side scripts:
    let profile = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    return {
      ID: profile.getId(),
      FullName: profile.getName(),
      GivenName: profile.getGivenName(),
      FamilyName: profile.getFamilyName(),
      ImageURL: profile.getImageUrl(),
      Email: profile.getEmail(),
    }
  }

  getToken() {
    // The ID token you need to pass to your backend:
    var id_token = window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;
    var expires_in = window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().expires_in;
    // console.log("ID Token: " + id_token);
    return id_token
  }

  renewToken() {
    window.gapi.auth2.getAuthInstance().currentUser.get().reloadAuthResponse();
  }

  isSignedIn() {
    let isSignedIn = false;
    try {
      isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get()
    } catch (err) { }
    return isSignedIn
  }

  listen() {
   window.gapi?.auth2.getAuthInstance().isSignedIn.listen((loggedIn:boolean)=>{
    this.dataTransfer.changeLoggedIn(loggedIn);
   });
  }

}
