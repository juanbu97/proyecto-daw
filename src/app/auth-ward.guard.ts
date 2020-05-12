import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthWardGuard implements CanActivate {

  constructor(public authService: AuthService, public rout:Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.devolverAuthState().pipe(map(user=>{
      if (user) {
        return true;
      } else {
        this.rout.navigate(['/']);
      }
    }));
  }
  
}
