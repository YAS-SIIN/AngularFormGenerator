export class ElementsBase {
  Id: number;
  fieldname: string;
  value: string | undefined;
  displayname: string;
  required: boolean; 
  controlType: string;
  inputtype: string;
  validator: string;
  description: string; 
  options: {key: string, value: string}[];

  constructor(options: {
    Id?: number;
    fieldname?: string;
    displayname?: string;
    value?: string;
    required?: boolean;
    order?: number;
    controlType?: string;
    inputtype?: string;
    validator?: string;
    description?: string;
    options?: {key: string, value: string}[];} = {}) 
    { 
    this.Id = options.Id || 0;
    this.fieldname = options.fieldname || '';
    this.displayname = options.displayname || '';
    this.value = options.value;
    this.required = !!options.required; 
    this.controlType = options.controlType || '';
    this.validator = options.validator || "";
    this.inputtype = options.inputtype || '';
    this.description = options.description  || ''; 
    this.options = options.options || [];
  }
}
