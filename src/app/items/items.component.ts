import { Component, OnInit } from '@angular/core';
import { Item } from '../items';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  misitems: Item[]=[];

  constructor(private objeto:ItemsService) { }

  ngOnInit(): void {
    console.log("ngOnInit de item");
    this.misitems = this.objeto.getItem();
    console.log(this.misitems);
  }

}
