import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function TipoPeliculaValidator(): ValidatorFn {
  return function (formGroup: AbstractControl): ValidationErrors | null {
    const tipo = formGroup.get('tipo');
    const respuestaError = { noCoincide: 'El tipo de película solo puede ser Comedia/Terror/Amor/Otros' };
    if (tipo) {
      const tipoValue = tipo.value ? tipo.value.toLowerCase() : ''; 
      if (tipoValue !== 'amor' && tipoValue !== 'comedia' && tipoValue !== 'terror' && tipoValue !== 'otros') {
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