import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';

import {TabViewModule} from 'primeng/tabview';


import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule ,
    MultiSelectModule,
    TabViewModule
  ],
  declarations: [ 
    AppComponent,
    DropdownComponent
 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
