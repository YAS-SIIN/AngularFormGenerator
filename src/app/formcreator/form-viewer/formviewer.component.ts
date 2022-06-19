 
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
  
  _elementScontrolService: ElementScontrolService; 
  _elementsService: ElementsService; 
  _sharedService: SharedService;
  
  constructor(elementScontrolService : ElementScontrolService , elementsService: ElementsService, sharedService: SharedService) {
    this._elementScontrolService = elementScontrolService; 
    this._sharedService = sharedService;
    this._elementsService = elementsService;  
   }
 
  ngOnChanges(changes: SimpleChanges): void {

  }
 
  @Input() 
  SelectedFormModel: FormModel = new FormModel(); 
    
  ElementList!: ElementModel[]; 
  form: FormGroup = new FormGroup({});
  payLoad = ' ';
   
  ngOnInit(): void {
    this.ElementList = this._elementsService.GetFormsList(this.SelectedFormModel.Id); 
    this.form = this._elementScontrolService.toFormGroup(this.ElementList);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
