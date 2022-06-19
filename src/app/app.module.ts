import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { MenuComponent } from './menu/menu.component';
import { CampeonesComponent } from './campeones/campeones.component';
import { ItemsComponent } from './items/items.component';
import { RunaterraComponent } from './runaterra/runaterra.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { CreditosComponent } from './creditos/creditos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CostoPipe } from './services/costo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrarComponent,
    MenuComponent,
    CampeonesComponent,
    ItemsComponent,
    RunaterraComponent,
    HomeComponent,
    ContactoComponent,
    AyudaComponent,
    CreditosComponent,
    UsuarioComponent,
    CostoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
