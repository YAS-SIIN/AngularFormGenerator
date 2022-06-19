 
import { Injectable  } from '@angular/core';
 
import * as elements from '../datafile/elements.json';  
import { ElementModel } from 'src/app/models/element-model';
import { ElementTypeModel, ElementTypes } from 'src/app/models/element-types';
 
@Injectable({
  providedIn: 'root',
})
export class ElementsService  {
 
  elementslst!: any; 
  ElementList!: ElementModel[];
  elementTypesList!: ElementTypeModel[];  

  constructor( ) { 
  }

  GetFormsList(FormId: number): ElementModel[] {
    debugger
    if (this.ElementList == undefined || this.ElementList == null) {
 
      this.elementslst = elements;
      this.ElementList = this.elementslst.default;
    
    if (this.ElementList.filter(a => a.FormId == FormId).length == 0) {
      this.ElementList = this.ElementList.filter(a => a.FormId == 0);
    } else{
      this.ElementList = this.ElementList.filter(a => a.FormId == FormId);
    }
    
  }
    return this.ElementList; 
  }
 
  GetElementTypes()  {
 
    this.elementTypesList = [
      { ElementName: 'InputTextbox', Id: ElementTypes.InputTextbox },
      { ElementName: 'InputEmail', Id: ElementTypes.InputEmail }, 
      { ElementName: 'InputNumber', Id: ElementTypes.InputNumber }, 
      { ElementName: 'InputTextarea', Id: ElementTypes.InputTextarea }, 
      { ElementName: 'InputDate', Id: ElementTypes.InputDate },  
      { ElementName: 'SelectBox', Id: ElementTypes.SelectBox }, 
      { ElementName: 'RadioButton', Id: ElementTypes.RadioButton }, 
      { ElementName: 'Checkbox', Id: ElementTypes.Checkbox }, 
    ];
     return this.elementTypesList;
  }

  SaveForm(model: ElementModel[]) { 
    return this.ElementList = model;
  }
   
}
