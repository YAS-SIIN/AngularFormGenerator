 
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private toastr : ToastrService) { }
 

  toastError(message: string, title: string = 'Error') {
    this.toastr.error(message, title);
  }

  toastInfo(message: string, title: string = 'Info') {
    this.toastr.info(message, title);
  }

  toastSuccess(message: string, title: string = 'Success') {
    this.toastr.success(message, title);
  }

  toastWarning(message: string, title: string = 'Warning') {
    this.toastr.warning(message, title);
  }
}
