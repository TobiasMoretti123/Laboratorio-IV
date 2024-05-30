export class Actor{
    nombre!: string;
    edad!: number;
    nacionalidad!:string;

    constructor(nombre:string,edad:number,nacionalidad:string){
        this.nombre=nombre;
        this.edad=edad;
        this.nacionalidad=nacionalidad;
    }
}