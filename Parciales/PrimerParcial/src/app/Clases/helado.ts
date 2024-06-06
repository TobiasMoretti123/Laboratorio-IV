export class Helado{
    sabor!:string | undefined;
    tipo!:string;
    precio!:number;
    peso!:number;

    constructor(sabor:string | undefined,tipo:string,precio:number,peso:number){
        this.sabor = sabor;
        this.tipo = tipo;
        this.precio = precio;
        this.peso = peso;
    }
}