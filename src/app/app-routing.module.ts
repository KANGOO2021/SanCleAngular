import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './app/home/home.component';
import { ConsultasComponent } from './app/consultas/consultas.component';
import { TrasladosComponent } from './app/traslados/traslados.component';
import { ContactoComponent } from './app/contacto/contacto.component';
import { ArcoirisComponent } from './app/arcoiris/arcoiris.component';
import { MedanosComponent } from './app/medanos/medanos.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consultas', component: ConsultasComponent },
  { path: 'traslados', component: TrasladosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'arcoiris', component: ArcoirisComponent },
  { path: 'medanos', component: MedanosComponent  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path:'',pathMatch:'full',redirectTo:'home'}
];

/* export const AppRoutingModule = RouterModule.forRoot(routes); */

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
