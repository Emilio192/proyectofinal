import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  constructor(private authService:AuthService,private cloud:AngularFirestore) { 

  }

  @Input() usuario={
    nombre:'',
    email:'',
    password:'',
    confirmpassword:''
    }


  ngOnInit(): void {
  }


  registrar(){
    console.log(this.usuario);
    const{nombre,email,password}=this.usuario;
    this.authService.registro(email,password)
    .then(res =>{
      this.authService.logout();
      Swal.fire({
        icon: 'success',
        title: 'Se registro con exito',
        html: '',
        timer: 2000,
        timerProgressBar: true,
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
      console.log("Se registro:", res);
    })

    this.cloud.collection("usuario").add({"nombre":nombre,"correo":email,"password":password}).then(()=>{
      
    }).catch(err=>{
      console.log(err);
    })

    }

}
