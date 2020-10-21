import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1SecondComponent } from './comp1-second/comp1-second.component';



@NgModule({
  declarations: [Comp1SecondComponent],
  imports: [
    CommonModule
  ]
})
export class SecondSubModule { 

  constructor(){console.log("Module loded");}
}
