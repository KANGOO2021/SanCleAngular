import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
//RUTAS
import { AppComponent } from './app.component';
import { ConsultasComponent } from './app/consultas/consultas.component';
import { TrasladosComponent } from './app/traslados/traslados.component';
import { HomeComponent } from './app/home/home.component';
import { ContactoComponent } from './app/contacto/contacto.component';
import { MedanosComponent } from './app/medanos/medanos.component';
import { ArcoirisComponent } from './app/arcoiris/arcoiris.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NavhamburgerComponent } from './app/navhamburger/navhamburger.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './app/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultasComponent,
    TrasladosComponent,
    HomeComponent,
    ContactoComponent,
    MedanosComponent,
    ArcoirisComponent,
    NavhamburgerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    ToastrModule.forRoot({
    timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    
    }), LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
