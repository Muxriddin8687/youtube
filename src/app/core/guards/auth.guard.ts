import { Injectable } from '@angular/core';
import { Route, CanLoad, UrlSegment, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('auth') == '' || localStorage.getItem('auth') == null) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
