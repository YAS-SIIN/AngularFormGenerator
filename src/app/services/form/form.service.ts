 
import { Injectable } from '@angular/core';

import * as forms from '../datafile/forms.json';
import { FormModel } from 'src/app/models/form-model'; 
 
@Injectable({
  providedIn: 'root',
})
export class FormService  {
 
  formslst!: any; 
  FormList!: FormModel[];
 
  constructor() {
  }

  getFormsList(): FormModel[] {
    if (this.FormList == undefined || this.FormList == null) {
      this.formslst = forms;
      this.FormList = this.formslst.default;
    }
    return this.FormList; 
  }
 
  saveForm(model: FormModel[]) { 
    return this.FormList = model;
  }
   
}
