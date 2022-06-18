import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormModel } from '../../models/forms-model';
import { RolesModel } from '../../models/roles-model';
import { FormCreatorService } from '../../services/formcreator/form-creator.service';
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-formelements',
  templateUrl: './formelements.component.html',
  styleUrls: ['./formelements.component.css'],
})
export class FormElementsComponent {
  title = 'BugloosTest';
  SaveMode = 'New';
  _formCreatorService: FormCreatorService; 
  _sharedService: SharedService;
  pblBack = false;  
  plnFirstPage = true; 
  plnCreateEditForm = false; 
  plnCreateEditElements = false; 

  displayedColumns: string[] = ['FormName', 'Desciption', 'EditDelete'];
  NewFormModel: FormModel = new FormModel(); 
 
  RoleList!: RolesModel[];
  FormList!: FormModel[]; 

  constructor(
    private formBuilder: FormBuilder,
    formCreatorService: FormCreatorService,
     sharedService: SharedService
  ) {
    this._formCreatorService = formCreatorService; 
    this._sharedService = sharedService;
  }

  ngOnInit(): void { 
    this.GetRoleList();
    this.GetFormList(); 
   
  }

  GetRoleList() {  
    this.RoleList = this._formCreatorService.GetRolesList(); 
  }
  GetFormList() {  
    this.FormList = this._formCreatorService.GetFormsList(); 
  }

  OpenCreateEditFormPanel() {
    this.plnFirstPage = false;
    this.plnCreateEditForm = true;
    this.pblBack = true;
    this.plnCreateEditElements = false;
  }

  OpenGridPanel() {
    this.plnFirstPage = true;
    this.pblBack = false;
    this.plnCreateEditForm = false;
    this.plnCreateEditElements = false;
  }


  onEdit(SelectedRow: FormModel){ 
    this.NewFormModel=SelectedRow;
    this.SaveMode = 'Edit';
    this.OpenCreateEditFormPanel();
  }
 
  onDelete(SelectedRow: FormModel){
 
    if(confirm('Are you sure?')){
      this.FormList = this.FormList.filter(f =>f.Id != SelectedRow.Id);
      this._formCreatorService.SaveForm(this.FormList);
  
      this._sharedService.toastSuccess('Action Done');
    }
        
  }
  
  onCreateEditElements(SelectedRow: FormModel){
    this.plnFirstPage = false;
    this.pblBack = true;
    this.plnCreateEditForm = false;
    this.plnCreateEditElements = true;
    this.NewFormModel=SelectedRow;  
  }
  
  onSubmit() {
    debugger
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
      })
    }
    
    this._formCreatorService.SaveForm(this.FormList);

    this.OpenGridPanel();
    this.SaveMode = 'New';
    this.NewFormModel = new FormModel();

    this._sharedService.toastSuccess('Action Done');
  }
}
