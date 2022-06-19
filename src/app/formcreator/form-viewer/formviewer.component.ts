 
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElementModel } from 'src/app/models/element-model';
import { FormModel } from 'src/app/models/form-model'; 
import { ElementsService } from 'src/app/services/elements/elements.service';
import { ElementScontrolService } from 'src/app/services/elements/elementscontrol.service';
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
 
 
   

  constructor(elementScontrolService : ElementScontrolService , elementsService: ElementsService, sharedService: SharedService) {
    this._elementScontrolService = elementScontrolService; 
    this._sharedService = sharedService;
    this._elementsService = elementsService;  
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
    this.NewData=SelectedRow;
     this.SaveMode = 'Edit';
     this.onOpenCreateEditFormViewrPanel();
  }
 

  onSubmit() { 
    this.NewData = this.form.value;
 

    if (this.SaveMode == 'New') {
      this.formlistDate.push(this.NewData); 
     } else if (this.SaveMode == 'Edit') { 
       this.formlistDate = this.formlistDate.map(a => {
         if(a.keys !== this.NewData?.keys){
           return a;
         }
         else{
           return this.NewData;
         }
       });
     }

    this.onBack();
    this.SaveMode = 'New'; 

    this._sharedService.toastSuccess('Action Done');
  }

}
