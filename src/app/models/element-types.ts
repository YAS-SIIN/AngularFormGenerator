export class ElementTypeModel { 
  Id!: number;  
  ElementName!: string; 
}

export enum ElementTypes {
  'InputTextbox',
  'InputEmail',
  'InputNumber',
  'InputTextarea',
  'InputDate', 
  'SelectBox',
  'RadioButton',
  'Checkbox',
}

 