import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ElementModel  } from 'src/app/models/element-model';
import { ElementTypes } from 'src/app/models/element-types';
 
@Injectable({providedIn: 'root'})
export class ElementScontrolService{
  toFormGroup(inputs: ElementModel[]): FormGroup {
    const group: any = {};

    inputs.forEach(input => {
      let validator: ValidatorFn[] = input.Required ? [Validators.required] : [];
      switch (input.ElementType) {
        case ElementTypes.InputEmail:
          validator.push(Validators.email);
          break;
        default:
          break;
      }
      group[input.FieldName] = validator.length > 0 ? new FormControl(input.Value || '', validator)
                                              : new FormControl(input.Value || '');
    });

    return new FormGroup(group);
  }
}
