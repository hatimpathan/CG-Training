import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Cmp1Component } from './first-submodule/cmp1/cmp1.component';
import { SecondSubModule } from './second-sub/second-sub.module';
import { Comp1SecondComponent } from './second-sub/comp1-second/comp1-second.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'Egr',component:Comp1SecondComponent },
  {path: 'Lazy',loadChildren: () => import("src/app/first-submodule/first-submodule.module")
  .then(m => m.FirstSubmoduleModule)  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
