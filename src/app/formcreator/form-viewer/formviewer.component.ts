 
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormModel } from 'src/app/models/forms-model';
import { FormViewerService } from 'src/app/services/datafile/form-viewer.service';
import { ElementsBase } from 'src/app/services/elements';
import { ElementScontrolService } from 'src/app/services/elements/elementscontrol.service';

@Component({
  selector: 'app-formviewer',
  templateUrl: './formviewer.component.html',
  styleUrls: ['./formviewer.component.css']
})
export class FormViewerComponent implements OnInit, OnChanges {
  title:string='BugloosTest FormViewer';
  _elementScontrolService: ElementScontrolService;
  _formViewerService: FormViewerService;
  
  constructor(elementScontrolService : ElementScontrolService, formViewerService : FormViewerService) {
    this._elementScontrolService = elementScontrolService;
    this._formViewerService = formViewerService;
   }
 
  ngOnChanges(changes: SimpleChanges): void {

  }

  @Input() 
  SelectedFormModel: FormModel = new FormModel(); 
  
  formFields: ElementsBase[] = [];
  form: FormGroup = new FormGroup({});
  payLoad = ' ';
   
  ngOnInit(): void {
    this.formFields = this._formViewerService.getForm();
    this.form = this._elementScontrolService.toFormGroup(this.formFields);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
