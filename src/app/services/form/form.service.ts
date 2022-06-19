 
import { Injectable } from '@angular/core';

import * as forms from '../datafile/forms.json';
import { FormModel } from 'src/app/models/form-model';
import { RoleModel, Roles } from 'src/app/models/role-model';
 
@Injectable({
  providedIn: 'root',
})
export class FormService  {
 
  formslst!: any;
  RoleList!: RoleModel[];
  FormList!: FormModel[];
 
  constructor() {
  }

  GetFormsList(): FormModel[] {
    if (this.FormList == undefined || this.FormList == null) {
      this.formslst = forms;
      this.FormList = this.formslst.default;
    }
    return this.FormList; 
  }

  GetRolesList(): RoleModel[]{
    this.RoleList = [
      { RoleName: 'Admin', Id: Roles.Admin },
      { RoleName: 'User', Id: Roles.User },  
    ];
     return this.RoleList; 
  }

  SaveForm(model: FormModel[]) { 
    return this.FormList = model;
  }
   
}
