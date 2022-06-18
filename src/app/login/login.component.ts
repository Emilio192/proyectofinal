import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario={
    email:'',
    password:''

    }

    constructor(private authService:AuthService,private cloud:AngularFirestore,private router: Router){

    }

    ingresar(){
      console.log(this.usuario);
      const{email,password}=this.usuario;
      this.authService.login(email,password)
      .then(res =>{
        console.log("Se loggeo:", res);
        this.router.navigate(['/menu']);
      })
      .catch(error => console.error(error)
      );
    }

    ingresarConGoogle(){
      const{email,password}=this.usuario;
      this.authService.loginWithGoogle(email,password)
      .then(res =>{
        console.log("Se loggeo con Google:", res);
        this.router.navigate(['/menu']);
        this.cloud.collection("usuario").add({"correo":email,"password":password}).then(()=>{
        }).catch(err=>{
          console.log(err);
        })
      })
      
      
    }

    registrar(){
      console.log(this.usuario);
      const{email,password}=this.usuario;
      this.authService.registro(email,password).then(res =>{
        console.log("Se registro:", res);
      })

      this.cloud.collection("usuario").add({"correo":email,"password":password}).then(()=>{
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

    

  ngOnInit(): void {
  }

}
