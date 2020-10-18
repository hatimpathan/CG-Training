import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from 'index-design-system/dist/loader';

defineCustomElements();

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IndexModule { }
