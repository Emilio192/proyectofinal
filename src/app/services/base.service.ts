import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario } from '../usuario';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  usuario={
    key$:'',
    nombre:'',
    email:'',
    password:''
    }

    userLogged=this.authService.getUserLogged();

  constructor(private db :AngularFirestore,private authService:AuthService) { }
  
  viewdatos(){

    let dataleible:any=[];

    const lectura =this.db.collection('usuario').get().toPromise();
    return lectura.then(resp =>{
      console.log(resp?.docs);

      const document:any=resp?.docs;
      for(let object of document){
        let datos= new Usuario();
        const dts:any=object.data();
        console.log(object.id); 
        console.log(dts);
        datos.key$=object.id;
        datos.nombre=dts.nombre;
        datos.email=dts.correo;
        datos.password=dts.password;

        dataleible.push(datos);
      }
      console.log(dataleible);
      return dataleible;


    }).catch((error)=>{
      console.log(error);
    })
  }


}
