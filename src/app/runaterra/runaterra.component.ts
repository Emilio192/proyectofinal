import { Component, OnInit } from '@angular/core';
import { RunaterraService } from '../services/runaterra.service';
import { Tierra } from '../tierra';

@Component({
  selector: 'app-runaterra',
  templateUrl: './runaterra.component.html',
  styleUrls: ['./runaterra.component.css']
})
export class RunaterraComponent implements OnInit {

  mistierras: Tierra[]=[];

  constructor(private tierra:RunaterraService) { }

  ngOnInit(): void {
    console.log("ngOnInit de Heroes");
    this.mistierras = this.tierra.getTierra();
    console.log(this.mistierras);
  }

}
