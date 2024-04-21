export class Usuario
{
    nombre?: string;
    clave?: string;

    constructor(nombre: string, clave:string)
    {
        this.clave = clave;
        this.nombre = nombre;
    }
}