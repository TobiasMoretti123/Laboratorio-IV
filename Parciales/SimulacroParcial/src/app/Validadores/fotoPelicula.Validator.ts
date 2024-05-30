import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function FotoPeliculaValidator(): ValidatorFn{
    return function (formGroup:AbstractControl): ValidationErrors | null{
        const fotoPelicula = formGroup.get('fotoPelicula');
        const respuestaError = { noEsImagen: 'La imagen solo puede ser jpg/png'}
        if(fotoPelicula){
            const valor = fotoPelicula.value;
            const extension = valor.split('.').pop()?.toLowerCase();
            if(extension !=='png' && extension !== 'jpg'){
                fotoPelicula.setErrors(respuestaError);
                return respuestaError;
            }else{
                fotoPelicula.setErrors(null);
                return null;
            }
        }
        return null;
    }
}