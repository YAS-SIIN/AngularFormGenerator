import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormModel } from './models/forms-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  constructor(private formBuilder: FormBuilder) {
 
  }
 
}
