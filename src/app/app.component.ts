import { Component } from '@angular/core';
import { reduce } from 'rxjs';
import { AuthService } from './services/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title="Prueba3";
  
  usuario={
    nombre:'',
    email:'',
    password:''

    }

    constructor(private authService:AuthService,private cloud:AngularFirestore,private router: Router){

    }

    ingresar(){
      console.log(this.usuario);
      const{email,password}=this.usuario;
      this.authService.login(email,password).then(res =>{
        console.log("Se loggeo:", res);
      })
    }

    ingresarConGoogle(){
      const{email,password}=this.usuario;
      this.authService.loginWithGoogle(email,password).then(res =>{
        console.log("Se loggeo con Google:", res);
      })
      
    }

    registrar(){
      console.log(this.usuario);
      const{email,password}=this.usuario;
      this.authService.registro(email,password).then(res =>{
        console.log("Se registro:", res);
      })

      this.cloud.collection("usuario").add({"correo":email,"password":password}).then(()=>{
        alert("Se dio de alta");
      }).catch(err=>{
        console.log(err);
      })
  
      }
    

    obtenerusuariologeado(){
this.authService.getUserLogged().subscribe(res=>{
  console.log(res?.email);
})
    }

    logout(){
      this.authService.logout();
    }


}