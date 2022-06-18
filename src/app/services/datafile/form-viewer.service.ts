import { Dropdown, InputTextbox, ElementsBase, InputEmail, InputNumber } from '../../services/elements';
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class FormViewerService{

  getForm() : ElementsBase[]{
    return [

      new InputTextbox({
        fieldname: 'name',
        displayname: 'First Name',
        required:true,
        order: 1
      }),

      new InputNumber({
        fieldname: 'age',
        displayname: 'Age',
        value: '30',
        inputtype:'number',
        order: 2
      }),

      new InputEmail({
        fieldname: 'emailAddress',
        displayname: 'Email',
        inputtype: 'email',
        order: 3
      }),

    ]
 
  }

}
