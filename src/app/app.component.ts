import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  constructor(private formBuilder: FormBuilder) {
 
  }
 
}
