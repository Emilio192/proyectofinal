import { Component, OnInit } from '@angular/core';
import { CampeonesService } from '../campeones.service';
import { Campeon } from '../campeon';

@Component({
  selector: 'app-campeones',
  templateUrl: './campeones.component.html',
  styleUrls: ['./campeones.component.css']
})
export class CampeonesComponent implements OnInit {

  miscampeones: Campeon[]=[];

  constructor(private champ:CampeonesService) { }

  ngOnInit(): void {
    console.log("ngOnInit de Heroes");
    this.miscampeones = this.champ.getCampeon();
    console.log(this.miscampeones);
  }

}
