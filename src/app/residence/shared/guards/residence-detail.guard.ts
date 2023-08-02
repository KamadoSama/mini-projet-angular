import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn:'root'
})
export class ResidenceDetailGuard {
  constructor( private router: Router){

  }
  canActivate:CanActivateFn =(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean =>{

    const id = +route.url[1].path;
    console.log("canActive",id)
    if(isNaN(id)|| id <= 0) {
      alert("residence est inconnu")

      this.router.navigate([''])
      return false
    }
    console.log(route)
    return true
  }
}
