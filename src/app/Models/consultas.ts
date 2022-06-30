export class Consultas {

    _id?: Number;
    nombre: String;
    email: String;
    whatsapp: Number;
    fecha_ingreso: Date;
    fecha_salida: Date;
    mensaje: String;

    constructor(
        nombre: String,
        email: String,
        whatsapp: Number,
        fecha_ingreso: Date,
        fecha_salida: Date,
        mensaje: String)
    {
        this.nombre = nombre;
        this.email = email;
        this.whatsapp = whatsapp;
        this.fecha_ingreso = fecha_ingreso;
        this.fecha_salida = fecha_salida;
        this.mensaje = mensaje;
    }
}