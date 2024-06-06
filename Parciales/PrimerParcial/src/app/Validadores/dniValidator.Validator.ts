import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function DniValidator():ValidatorFn {
    return function (formGroup: AbstractControl): ValidationErrors | null {
        const dni = formGroup.get('dni');
        const respuestaError = {noEsDni:'El dni solo puede tener entre 7 y 8 digitos'}
        if(dni){
            const isValidLength = /^\d{7,8}$/.test(dni.value);
            if(!isValidLength){
                dni.setErrors(respuestaError);
                return respuestaError;
            }else{
                dni.setErrors(null);
                return null;
            }
        }
        return null;
    }
}