import { SessionService } from './../../services/session/session.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  token: string;
  constructor(private auth: SessionService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    let observable = from([{ role: 'admin'}]);
    observable.subscribe( res => {
      this.token = res.role;
    });
    if ( this.token === 'admin') {
      return from([true]);
    } else {
      this.router.navigate(['/']);
      return from([false]);
    }
  }

}
