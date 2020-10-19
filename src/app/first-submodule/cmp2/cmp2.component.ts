import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {

  constructor() { }
code=`
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSubRoutingModule } from './first-sub-routing/first-sub-routing.module';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { Cmp3Component } from './cmp3/cmp3.component';


@NgModule({
  declarations: [Cmp1Component,Cmp2Component,Cmp3Component],
  imports: [ CommonModule, FirstSubRoutingModule ],
})
export class FirstSubmoduleModule {

  ngOnInit() {
    console.log("New Model Loaded")
  }
 }`
  ngOnInit() {
  }

}
