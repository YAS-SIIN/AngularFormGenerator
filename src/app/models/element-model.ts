import { ElementTypes } from "./element-types";

export class ElementModel {
  Id: number;
  FormId: number;
  FieldName: string;
  Value: string | undefined;
  DisplayName: string;
  Required: boolean; 
  Order: number;
  ElementType: ElementTypes;
  Validator: string;
  Description: string; 
  Options: {key: string, value: string}[];

  constructor(options: {
    Id?: number;
    FormId?: number;
    FieldName?: string;
    DisplayName?: string;
    Value?: string;
    Required?: boolean;
    Order?: number;
    ElementType?: ElementTypes;
    Validator?: string;
    Description?: string;
    Options?: {key: string, value: string}[];} = {}) 
    { 
    this.Id = options.Id || 1;
    this.FormId = options.FormId || 1;
    this.FieldName = options.FieldName || '';
    this.DisplayName = options.DisplayName || '';
    this.Value = options.Value;
    this.Required = !!options.Required; 
    this.Order = options.Order || 1;
    this.ElementType = options.ElementType || ElementTypes.InputTextbox;
    this.Validator = options.Validator || "";
    this.Description = options.Description  || ''; 
    this.Options = options.Options || [];
  }
}
  
export class InputTextbox extends ElementModel{
  override ElementType = ElementTypes.InputTextbox; 
}

export class InputEmail extends ElementModel{
  override ElementType = ElementTypes.InputEmail;
}

export class InputDate extends ElementModel{
  override ElementType = ElementTypes.InputDate;
}

export class InputNumber extends ElementModel{
  override ElementType = ElementTypes.InputNumber;
}
 
export class SelectBox extends ElementModel{
  override ElementType = ElementTypes.SelectBox;
}


export class Checkbox extends ElementModel{
  override ElementType = ElementTypes.Checkbox;
}

export class RadioButton extends ElementModel{
  override ElementType = ElementTypes.RadioButton;
}

export class InputTextarea extends ElementModel{
  override ElementType = ElementTypes.InputTextarea;
}

