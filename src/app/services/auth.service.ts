import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    public auth: AngularFireAuth,
    public rout: Router
  ) { 
    this.user = auth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          console.log("Está registrado");
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          console.log("No está resgistrado");
          this.userDetails = null;
        }
      }
    );

  }

  devolverAuthState() {
    return this.auth.authState;
  }


  devolverUser() {
    let user = firebase.auth().currentUser.email;
    if (user) {
      return user;
    } else {
      return false;
    }
  }

  login() {
    this.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res) => {
          this.rout.navigate(['/home']);
        }).catch(err => console.log(err.message));
      });
  }

  logout() {
    return firebase.auth().signOut();
  }
}
