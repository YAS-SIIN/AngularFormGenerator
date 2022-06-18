import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { SharedService } from '../shared/shared.service';
import * as forms from '../datafile/forms.json';
import * as roles from '../datafile/roles.json';
import { FormModel } from 'src/app/models/forms-model';
import { RolesModel } from 'src/app/models/roles-model';
 
@Injectable({
  providedIn: 'root',
})
export class FormCreatorService  {

 
  formslst!: any;
  roleslst!: any;
  RoleList!: RolesModel[];
  FormList!: FormModel[];

  private _http: HttpClient;

  constructor(http: HttpClient) {
        this._http = http;
  }

  GetFormsList(): FormModel[] {
    if (this.FormList == undefined || this.FormList == null) {
      this.formslst = forms;
      this.FormList = this.formslst.default;
    }
    return this.FormList; 
  }

  GetRolesList(): RolesModel[]{
    if (this.RoleList == undefined || this.RoleList == null) {
      this.roleslst = roles;
      this.RoleList = this.roleslst.default;
    }
    return this.RoleList;
  }

  SaveForm(model: FormModel[]) { 
    return this.FormList = model;
  }
   
}
