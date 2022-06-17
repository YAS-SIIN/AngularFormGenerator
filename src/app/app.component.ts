import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormModel } from './models/forms-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BugloosTest';
  createeditContent = false;
  taskdataSource: any;
  displayedColumns: string[] = ['FormName',  'Desciption'];
  NewFormModel: FormModel = new FormModel();
  RoleList: any = [
    { "Id": 1, "RoleName": "Admin" },
    { "Id": 2, "RoleName": "User" }
];
  //taskdataSource = eaadata.data;
  
  constructor(private formBuilder: FormBuilder) {
 
  }

  OpenNewEditPanel()
  {
    this.createeditContent = true;
  }
  
  OpenGridPanel()
  {
    this.createeditContent = false;
  }

  onSubmit() {
    
  }
}
