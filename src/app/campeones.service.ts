import { Injectable } from '@angular/core';
import { Campeon } from './campeon';
import { CAMPEON } from './miscampeones';

@Injectable({
  providedIn: 'root'
})
export class CampeonesService {

  private campeon:Campeon[]=CAMPEON;

  constructor() { }

  getCampeon(): Campeon[] {
    return this.campeon;
  }

  getUnCampeon(posicion:number):Campeon{
    return this.campeon[posicion];
  }

  searchUnCampeon(nomheroe:string):number{
    let index =this.campeon.findIndex(p=> p.nombre === nomheroe);
    return index;
  }
  
  }
