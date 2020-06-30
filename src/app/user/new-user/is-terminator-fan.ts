import { AbstractControl } from '@angular/forms';

export function isTerminatorFan(control: AbstractControl): {} {
  if (control.value && control.value.length > 0 && !control.value.toLowerCase().includes('terminator')) {
    return { isTerminatorFan: true };
  }
  return null;
}
