import { AbstractControl, ValidatorFn } from '@angular/forms';

export function startTimeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const startTime = new Date(control.value);
    const now = new Date();
    return startTime < now ? { 'startTimeInvalid': { value: control.value } } : null;
  };
}

export function endTimeValidator(startTimeControl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const endTime = new Date(control.value);
    const startTime = new Date(startTimeControl.value);
    return endTime <= startTime ? { 'endTimeInvalid': { value: control.value } } : null;
  };
}
