import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainModuleComp} from './MainModuleComp';


const routes: Routes = [
  {
    path: '', component: MainModuleComp,
    children: [
      {
        path: '', loadChildren: () => import('./home/home.module')
          .then(m => m.HomeModule),
      },
      {
        path: '', loadChildren: () => import('./case-studies/case-studies.module')
          .then(m => m.CaseStudiesModule),
      },
      {
        path: 'service', loadChildren: () => import('./services/services.module')
          .then(m => m.ServicesModule),
      },
      {
        path: '', loadChildren: () => import('./solution/solution.module')
          .then(m => m.SolutionModule),
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoute {
}
