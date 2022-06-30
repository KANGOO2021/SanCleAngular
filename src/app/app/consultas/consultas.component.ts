import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consultas } from '../../Models/consultas';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConsultaService } from '../../Services/consultas.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  consultaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private consultaService: ConsultaService
   ) {
    this.consultaForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      whatsapp: ['', Validators.required],
      fecha_ingreso: ['', Validators.required],
      fecha_salida: ['', Validators.required],
      mensaje: ['', Validators.required],
    })
   
  }

  ngOnInit(): void {}

  realizarConsulta() {

    const CONSULTA: Consultas = {
      nombre: this.consultaForm.get('nombre')?.value,
      email: this.consultaForm.get('email')?.value,
      whatsapp: this.consultaForm.get('whatsapp')?.value,
      fecha_ingreso: this.consultaForm.get('fecha_ingreso')?.value,
      fecha_salida: this.consultaForm.get('fecha_salida')?.value,
      mensaje: this.consultaForm.get('mensaje')?.value,
      
    }

   /*  console.log(CONSULTA); */
    this.consultaService.guardarConsulta(CONSULTA).subscribe({
    next: (v) => console.log(v),
    error: (e) => console.error(e)
    })
    this.toastr.success('El mensaje fue enviado exitosamente!', 'Consulta realizada!');
    setTimeout(() => {
     this.router.navigate(['home']);
      window.scroll({top: 0, left: 0, behavior: 'smooth'}); }, 3000)
    this.consultaForm.reset()
  }
  
}

