import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Cmp1Component } from './first-submodule/cmp1/cmp1.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {
    path: 'Lazy',
    loadChildren: () =>
    import("src/app/first-submodule/first-submodule.module").then(m => m.FirstSubmoduleModule)
  }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
