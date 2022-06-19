import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userLogged=this.authService.getUserLogged();

  tabla:any=[];

  constructor(private authService:AuthService,private router: Router,private datos:BaseService) { }


  ngOnInit(): void {
    this.datos.viewdatos().then(resp=>{
      this.tabla=resp;
    });
    console.log(this.tabla.nombre);
    console.log(this.tabla.email);
    console.log(Object.values(this.userLogged));

  }


  logout(){
    this.authService.logout();
  }

}
