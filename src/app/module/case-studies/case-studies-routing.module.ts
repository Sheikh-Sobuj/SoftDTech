import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CaseStudiesComponent} from "./case-studies.component";
import {CaseStudiesPageComp} from "./case-studies-page/CaseStudiesPageComp";




const routes: Routes = [{
  path: '',
  component: CaseStudiesComponent,
  children: [
    {
      path: 'case-studies',
      component: CaseStudiesPageComp,
    },
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaseStudiesRoutingModule {
}
