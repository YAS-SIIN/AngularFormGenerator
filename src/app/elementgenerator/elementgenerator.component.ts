import { FormGroup } from '@angular/forms'; 
import { Component, Input, OnInit } from '@angular/core';
import { ElementModel } from '../models/element-model';
import { ElementTypes } from '../models/element-types';
 

@Component({
  selector: 'app-elementgenerator',
  templateUrl: './elementgenerator.component.html',
  styleUrls: ['./elementgenerator.component.css']
})
export class ElementGeneratorComponent implements OnInit {
  title:string='BugloosTest ElementGenerator';

  elementTypesList = ElementTypes;

  @Input()
  input!: ElementModel;
  
  @Input() form!: FormGroup;
 
  payLoad = ' ';

  constructor() {

   }
 
  ngOnInit(): void {
  }

  get isValid() { return this.form.controls[this.input.FieldName].valid; }

}
