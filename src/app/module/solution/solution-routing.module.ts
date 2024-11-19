import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SolutionComponent} from './solution.component';
import {SolutionPageComp} from "./solution-page/SolutionPageComp";




const routes: Routes = [{
  path: '',
  component: SolutionComponent,
  children: [
    {
      path: 'solution',
      component: SolutionPageComp,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionRoutingModule {
}
