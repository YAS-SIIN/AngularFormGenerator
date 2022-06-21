import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormModel } from '../models/form-model';
import { RoleModel } from '../models/role-model';
import { UserModel } from '../models/user-model';
import { FormService } from '../services/form/form.service';
import { AuthService } from '../services/shared/auth.service';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-formcreator',
  templateUrl: './formcreator.component.html',
  styleUrls: ['./formcreator.component.css'],
})
export class FormCreatorComponent {
  title = 'Form';

  _formService: FormService; 
  _sharedService: SharedService;
  _authService: AuthService;
  
  SaveMode = 'New'; 
  pnlBackForms = false;  
  pnlFirstPage = true; 
  pnlCreateEditForm = false; 
  pnlElements = false; 
  pnlFormView = false; 

  displayedColumns: string[] = ['FormName', 'Desciption', 'Actions'];
  NewFormModel: FormModel = new FormModel(); 
  userLogin!: UserModel; 
 
  RoleList!: RoleModel[];
  FormList!: FormModel[]; 

  constructor(
    private formBuilder: FormBuilder, formService: FormService, sharedService: SharedService, authService: AuthService
  ) {
    this._formService = formService; 
    this._sharedService = sharedService;
    this._authService = authService;
  }

  ngOnInit(): void { 
    this.GetRoleList();
    this.GetFormList(); 
    this.GetUserLogin(); 
  }
  
  GetRoleList() {  
    this.RoleList = this._authService.GetRolesList(); 
  }
  GetFormList() {  
    this.FormList = this._formService.GetFormsList(); 
  }
  GetUserLogin() {  
    this.userLogin = this._authService.GetUserLogin();
  }

  onOpenCreateEditFormPanel() {
    this.pnlFirstPage = false;
    this.pnlCreateEditForm = true;
    this.pnlBackForms = true;
    this.pnlElements = false;
    this.NewFormModel = new FormModel();
  }

  onBackAll() {
    this.pnlFirstPage = true;
    this.pnlBackForms = false;
    this.pnlCreateEditForm = false;
    this.pnlElements = false;
    this.pnlFormView = false;
  }
 
  onOpenFormviewer(SelectedRow: FormModel){
    this.pnlFirstPage = false;
    this.pnlBackForms = true;
    this.pnlCreateEditForm = false;
    this.pnlFormView = true;
    this.NewFormModel=SelectedRow;  
  }
  
  onEdit(SelectedRow: FormModel){ 
    this.SaveMode = 'Edit';
    this.onOpenCreateEditFormPanel();
    this.NewFormModel=SelectedRow;
  }
 
  onDelete(SelectedRow: FormModel){
 
    if(confirm('Are you sure?')){
      this.FormList = this.FormList.filter(f =>f.Id != SelectedRow.Id);
      this._formService.SaveForm(this.FormList);
  
      this._sharedService.toastSuccess('Action Done');
    }
        
  }
  
  onCreateEditElements(SelectedRow: FormModel){
    this.pnlFirstPage = false;
    this.pnlBackForms = true;
    this.pnlCreateEditForm = false;
    this.pnlElements = true;
    this.NewFormModel=SelectedRow;  
  }
  
  onSubmit() {
     
    if (this.SaveMode == 'New') {
     const MaxId= Math.max.apply(Math, this.FormList.map(o => { return o.Id; }));
     this.NewFormModel.Id=MaxId + 1;
      this.FormList.push(this.NewFormModel); 
    } else if (this.SaveMode == 'Edit') { 
      this.FormList = this.FormList.map(a => {
        if(a.Id !== this.NewFormModel?.Id){
          return a;
        }
        else{
          return this.NewFormModel;
        }
      });
    }
    
    this._formService.SaveForm(this.FormList);

    this.onBackAll();
    this.SaveMode = 'New';
    this.NewFormModel = new FormModel();

    this._sharedService.toastSuccess('Action Done');
  }
}
