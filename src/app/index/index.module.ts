import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from 'index-design-system/dist/loader';
import{IndexTextInput} from 'index-design-system/dist/loader';

defineCustomElements();
const Decla=[IndexTextInput];

@NgModule({
  declarations: [],
  imports: [],
})
export class IndexModule { }
