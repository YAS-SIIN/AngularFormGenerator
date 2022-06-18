import { NgModule } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormCreatorComponent } from './formcreator/formcreator.component';

const routes: Routes = [ 
  {
    path: '', component: FormCreatorComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
