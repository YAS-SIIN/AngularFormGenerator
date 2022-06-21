import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { ToastrModule } from 'ngx-toastr';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatRadioModule } from '@angular/material/radio'
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FormCreatorComponent } from './formcreator/formcreator.component';
import { HttpClientModule } from '@angular/common/http';
import { ElementGeneratorComponent } from './elementgenerator/elementgenerator.component';
import { FormViewerComponent } from './formcreator/form-viewer/formviewer.component';
import { FormElementsComponent } from './formcreator/formelements/formelements.component';
import { NgSelectModule } from '@ng-select/ng-select';
 

@NgModule({
  declarations: [
    AppComponent,
    FormCreatorComponent,
    FormViewerComponent,
    ElementGeneratorComponent,
    FormElementsComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    FormsModule,
    ReactiveFormsModule,
 
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatTableModule,
    ToastrModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
 
    NgSelectModule,
  
    ToastrModule.forRoot(),
  ], 
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
