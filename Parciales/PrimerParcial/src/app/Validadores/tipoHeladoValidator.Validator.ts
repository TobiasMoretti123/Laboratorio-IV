import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function TipoHeladoValidator(): ValidatorFn {
  return function (formGroup: AbstractControl): ValidationErrors | null {
    const tipo = formGroup.get('tipo');
    const respuestaError = { noCoincide: 'El tipo de helado solo puede ser agua/crema' };
    if (tipo) {
      const tipoValue = tipo.value ? tipo.value.toLowerCase() : ''; 
      if (tipoValue !== 'agua' && tipoValue !== 'crema') {
        tipo.setErrors(respuestaError);
        return respuestaError;
      } else {
        tipo.setErrors(null);
        return null;
      }
    }
    return null;
  }
}