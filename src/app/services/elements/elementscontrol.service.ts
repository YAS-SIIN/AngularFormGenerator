import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ElementsBase } from './elementsbase';
 

@Injectable({providedIn: 'root'})
export class ElementScontrolService{
  toFormGroup(inputs: ElementsBase[]): FormGroup {
    const group: any = {};

    inputs.forEach(input => {
      let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
      switch (input.inputtype) {
        case "email":
          validator.push(Validators.email);
          break;
        default:
          break;
      }
      group[input.fieldname] = validator.length > 0 ? new FormControl(input.value || '', validator)
                                              : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }
}
