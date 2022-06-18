import { Injectable } from '@angular/core';
import { TIERRA } from '../mistierras';
import { Tierra } from '../tierra';

@Injectable({
  providedIn: 'root'
})
export class RunaterraService {

  private tierra:Tierra[]=TIERRA;

  constructor() { }

  getTierra(): Tierra[] {
    return this.tierra;
  }

  getUnTierra(posicion:number):Tierra{
    return this.tierra[posicion];
  }

  searchUnTierra(nomheroe:string):number{
    let index =this.tierra.findIndex(p=> p.nombre === nomheroe);
    return index;
  }
}