import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSubRoutingModule } from './first-sub-routing/first-sub-routing.module';
import { Cmp1Component } from './cmp1/cmp1.component';


@NgModule({
  declarations: [Cmp1Component],
  imports: [ CommonModule, FirstSubRoutingModule ],
})
export class FirstSubmoduleModule { }
