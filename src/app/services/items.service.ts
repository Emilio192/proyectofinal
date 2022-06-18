import { Injectable } from '@angular/core';
import { Item } from '../items';
import { ITEM } from '../misitems';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private objeto:Item[]=ITEM;

  constructor() { }

  getItem(): Item[] {
    return this.objeto;
  }

  getUnItem(posicion:number):Item{
    return this.objeto[posicion];
  }

  searchUnItem(nomheroe:string):number{
    let index =this.objeto.findIndex(p=> p.nombre === nomheroe);
    return index;
  }
}
