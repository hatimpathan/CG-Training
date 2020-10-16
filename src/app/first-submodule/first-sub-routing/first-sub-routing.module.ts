import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp2Component } from '../cmp2/cmp2.component';
import { Cmp3Component } from '../cmp3/cmp3.component';
import { Routes, RouterModule } from '@angular/router';
import { Cmp1Component } from '../cmp1/cmp1.component';


const routes: Routes = [
  
  {path:'',component:Cmp1Component,children:[
  {path:'Cmp2',component:Cmp2Component},
  {path:'Cmp3',component:Cmp3Component}]}
  ];


@NgModule({
  // declarations: [Cmp2Component,Cmp3Component],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class FirstSubRoutingModule { }
