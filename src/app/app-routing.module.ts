import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './ayuda/ayuda.component';
import { CampeonesComponent } from './campeones/campeones.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CreditosComponent } from './creditos/creditos.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RunaterraComponent } from './runaterra/runaterra.component';
import { canActivate,redirectUnauthorizedTo } from '@angular/fire/auth-guard'; 

const routes: Routes = [
  {path: 'registrar', component: RegistrarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'campeones', component: CampeonesComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'runaterra', component: RunaterraComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'ayuda', component: AyudaComponent},
  {path: 'creditos', component: CreditosComponent},
  {path: '**', pathMatch:'full',redirectTo: 'login'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
