import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';
import { BaseService } from '../services/base.service';
import { Usuario } from '../usuario';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  userLogged=this.authService.getUserLogged();
  
  @Input() usuario={
    nombre:'',
    email:'',
    password:'',
    confirmpassword:''
    }

    tabla:any=[];
  

  constructor(private authService:AuthService,private cloud:AngularFirestore,private datos:BaseService) { }

  ngOnInit(): void {
    this.datos.viewdatos().then(resp=>{
      this.tabla=resp;
    });
  }

  

}
