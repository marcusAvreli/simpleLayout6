// modules
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';




// services

import {UIElementsModule} from '../ui-elements/ui-elements.module';


@NgModule({
  imports: [
    CommonModule,
   // HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    
   // BsDatepickerModule.forRoot(),
    UIElementsModule
  ],
  declarations: [
    
    
  ],
  providers: [
    
  ],
  exports: [
    CommonModule,
   // HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
   // BsDatepickerModule,
    UIElementsModule,
    
    
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}