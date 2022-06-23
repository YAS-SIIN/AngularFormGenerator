import { NumberInput } from '@angular/cdk/coercion';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ElementModel } from 'src/app/models/element-model';
import { ElementTypeModel, ElementTypes } from 'src/app/models/element-types';
import { ElementsService } from 'src/app/services/elements/elements.service';
import { FormModel } from '../../models/form-model';  
import { SharedService } from '../../services/shared/shared.service';

@Component({
  selector: 'app-formelements',
  templateUrl: './formelements.component.html',
  styleUrls: ['./formelements.component.css'],
})
export class FormElementsComponent {
  title = 'Element';
  _elementsService: ElementsService; 
  _sharedService: SharedService;
 
  SaveMode = 'New';
  pblBackElement = false;  
  plnFirstPage = true; 
  plnCreateEditElements = false; 
  pnlShowForms = false; 
  pnlOptions = false; 

  selectedCar: string="";

  displayedColumns: string[] = ['FieldName', 'DisplayName', 'ElementType','Required', 'Actions'];

  @Input() 
  SelectedFormModel!: FormModel; 
  
  NewElementModel!: ElementModel; 
  ElementList!: ElementModel[]; 
  elementTypesSource!: ElementTypeModel[];
  controlOptions  =  [];
 
  selectedOptionItem: string[] = [];


  elementTypesList = ElementTypes;

  constructor(
    private formBuilder: FormBuilder, elementsService: ElementsService, sharedService: SharedService) {
    this._elementsService = elementsService; 
    this._sharedService = sharedService;
  }

  
  ngOnInit(): void {      

    this.ElementList=[];
    this._elementsService.saveForm(this.ElementList);
    this.getElementList(); 
    this.getElementTypes();
  }
 
  getElementList() {  
   this.ElementList = this._elementsService.getFormsList(this.SelectedFormModel.Id); 
  }

  getElementTypes(){ 
    this.elementTypesSource = this._elementsService.getElementTypes();
  }
 
  onElementTypeChange(value: number) { 
    
    if (value == 6 || value == 5) {
      this.pnlOptions = true;
    } else {
      this.pnlOptions = false;
    }
  }

  onOpenCreateEditFormPanel() { 
    this.selectedOptionItem=[];
    this.plnFirstPage = false; 
    this.pblBackElement = true;
    this.plnCreateEditElements = true;
    this.NewElementModel = new ElementModel;
  }

  onBack() {
    this.plnFirstPage = true;
    this.pblBackElement = false; 
    this.plnCreateEditElements = false;
  }
 
  onEdit(SelectedRow: ElementModel){ 
    this.SaveMode = 'Edit';
    this.onOpenCreateEditFormPanel();
    this.NewElementModel=SelectedRow;
    if(this.NewElementModel.Options){ 
      this.selectedOptionItem = this.NewElementModel.Options.map(o => o.value); 
    }
  }
 
  onDelete(SelectedRow: FormModel){
 
    if(confirm('Are you sure?')){
     this.ElementList = this.ElementList.filter(f =>f.Id != SelectedRow.Id);
      this._elementsService.saveForm(this.ElementList);
  
      this._sharedService.toastSuccess('Action Done');
    }
        
  }
  
  onCreateEditElements(){
    this.plnFirstPage = false;
    this.pblBackElement = true; 
    this.plnCreateEditElements = true;  
  }
  
  onSubmit() {
  
    this.NewElementModel.Options = this.selectedOptionItem.map((o: string,i: number) => ({key: i.toString(), value: o}));; 

    if (this.SaveMode == 'New') {
      const MaxId= Math.max.apply(Math, this.ElementList.map(o => { return o.Id; }));
      this.NewElementModel.Id=MaxId + 1;
      this.NewElementModel.FormId = this.SelectedFormModel.Id;
       this.ElementList.push(this.NewElementModel); 
     } else if (this.SaveMode == 'Edit') { 
       this.ElementList = this.ElementList.map(a => {
         if(a.Id !== this.NewElementModel?.Id){
           return a;
         }
         else{
           return this.NewElementModel;
         }
       });
     }
     
     this._elementsService.saveForm(this.ElementList);
 
     this.onBack();
     this.SaveMode = 'New'; 
    this.selectedOptionItem=[];
     this.NewElementModel = new ElementModel;
 
    this._sharedService.toastSuccess('Action Done');
  }
}
