import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainModuleComp} from "./module/MainModuleComp";

const routes: Routes = [
  {
    path: '', component: MainModuleComp,
    children: [
      {
        path: '', loadChildren: () => import('./module/MainModule')
          .then(m => m.MainModule),

      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
