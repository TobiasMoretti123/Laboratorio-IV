import { Timestamp } from '@angular/fire/firestore';
import { Actor } from './actor';

export class Pelicula{
    Nombre!:string;
    cantidadPublico!:number;
    fechaEstreno!:Timestamp;
    fotoPelicula!:string;
    id!:number;
    tipo!:string;
    actor!:Actor;

    constructor(nombre:string,cantidadPublico:number,fechaEstreno:Timestamp,fotoPelicula:string,id:number,tipo:string,actor:Actor){
        this.Nombre = nombre;
        this.cantidadPublico = cantidadPublico;
        this.fechaEstreno = fechaEstreno;
        this.fotoPelicula = fotoPelicula;
        this.id = id;
        this.tipo = tipo;
        this.actor = actor;
    }
}