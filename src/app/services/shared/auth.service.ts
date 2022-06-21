 
import { Injectable } from '@angular/core';
  
import * as userlogin from '../datafile/userlogin.json';
import { RoleModel, Roles } from 'src/app/models/role-model';
import { UserModel } from 'src/app/models/user-model';
 
@Injectable({
  providedIn: 'root',
})
export class AuthService  {
  userLoginDefault!: any; 
  userLoginModel!: UserModel; 
  RoleList!: RoleModel[];
 
  constructor() {
  }
 
  getRolesList(): RoleModel[]{
    this.RoleList = [
      { RoleName: 'Admin', Id: Roles.Admin },
      { RoleName: 'User', Id: Roles.User },  
    ];
     return this.RoleList; 
  }
  getUserLogin(): UserModel{
    
    this.userLoginDefault = userlogin;
    this.userLoginModel = this.userLoginDefault.default;
   
  return this.userLoginModel;   
  }
 
}
