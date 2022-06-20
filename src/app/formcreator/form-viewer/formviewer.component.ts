 
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElementModel } from 'src/app/models/element-model';
import { FormModel } from 'src/app/models/form-model'; 
import { UserModel } from 'src/app/models/user-model';
import { ElementsService } from 'src/app/services/elements/elements.service';
import { ElementScontrolService } from 'src/app/services/elements/elementscontrol.service';
import { AuthService } from 'src/app/services/shared/auth.service';
import { SharedService } from 'src/app/services/shared/shared.service';
 
@Component({
  selector: 'app-formviewer',
  templateUrl: './formviewer.component.html',
  styleUrls: ['./formviewer.component.css']
})
export class FormViewerComponent implements OnInit, OnChanges {
  title:string='FormViewer';
  
  SaveMode = 'New'; 
  _elementScontrolService: ElementScontrolService; 
  _elementsService: ElementsService; 
  _sharedService: SharedService;
  _authService: AuthService;

  pblBackFormViewer = false;  
  plnFirstPage = true; 
  plnCreateEditFormViewer = false; 
  displayedColumns: string[] = [];
  
  @Input() 
  SelectedFormModel: FormModel = new FormModel(); 
    
  elementList!: ElementModel[]; 
  form: FormGroup = new FormGroup({});
  NewData : any;
  formlistDate: any[]=[];
  userLogin!: UserModel; 
 
  
  constructor(elementScontrolService : ElementScontrolService , elementsService: ElementsService, sharedService: SharedService, authService: AuthService) {
    this._elementScontrolService = elementScontrolService; 
    this._sharedService = sharedService;
    this._elementsService = elementsService;  
    this._authService = authService;
   }
 
  ngOnChanges(changes: SimpleChanges): void {

  }
 
  ngOnInit(): void {
    this.title = this.SelectedFormModel.FormName;
    debugger
    this.elementList = this._elementsService.GetFormsList(this.SelectedFormModel.Id); 
    this.form = this._elementScontrolService.toFormGroup(this.elementList);

    this.displayedColumns = Object.keys(this.form.value);
    this.displayedColumns.push('Actions');

    this.userLogin = this._authService.GetUserLogin();
  }

  onOpenCreateEditFormViewrPanel() {
    this.plnFirstPage = false;
    this.plnCreateEditFormViewer = true;
    this.pblBackFormViewer = true; 
     this.NewData = [];
  }

  onBack() {
    this.plnFirstPage = true;
    this.pblBackFormViewer = false;
    this.plnCreateEditFormViewer = false 
  }


  onDelete(SelectedRow: any){
 
     if(confirm('Are you sure?')){
       this.formlistDate = this.formlistDate.filter(f =>f.Id != SelectedRow.Id);
       //this._formService.SaveForm(this.FormList);
    
       this._sharedService.toastSuccess('Action Done');
     }
        
  }
  
  onEdit(SelectedRow: any){ 
    debugger
     this.SaveMode = 'Edit';
     this.onOpenCreateEditFormViewrPanel();
     this.NewData=SelectedRow;
     let ColumnArray = Object.keys(this.form.value);
     this.form.value.Name='aa22';
     ColumnArray.map(a=> {
      if (a != 'Id') {
        this.form.value[a] == this.NewData[a]
      }
     }) 
  }
 

  onSubmit() { 
  debugger
    if (this.SaveMode == 'New') {

      this.NewData = this.form.value;
      let MaxId= 0;
      if (this.formlistDate.length != 0) {
        MaxId= Math.max.apply(Math, this.formlistDate.map(o => { return o.Id; }));
      } 
      this.NewData.Id=MaxId + 1; 
      this.formlistDate.push(this.NewData); 

     } else if (this.SaveMode == 'Edit') { 
      const selectedId =  this.NewData.Id; 
      this.NewData = this.form.value;
      this.NewData.Id = selectedId;

       this.formlistDate = this.formlistDate.map(a => {
         if(a.Id !== +this.NewData.Id){
           return a;
         }
         else{
           return this.NewData;
         }
       });
     }

    this.onBack();
    this.SaveMode = 'New'; 
    this.NewData = [];

    this._sharedService.toastSuccess('Action Done');
  }

}
