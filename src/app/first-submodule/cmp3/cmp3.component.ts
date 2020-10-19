import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.css']
})
export class Cmp3Component implements OnInit {

  constructor() { }
  code=`const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path: 'Lazy',loadChildren: () => import("src/app/first-submodule/first-submodule.module")
    .then(m => m.FirstSubmoduleModule)  },
OR

    {path:'Lazy', loadChildren:("src/app/first-submodule/first-submodule.module#first-submodule.ts")}
    
    ];`

  ngOnInit() {
  }

}
