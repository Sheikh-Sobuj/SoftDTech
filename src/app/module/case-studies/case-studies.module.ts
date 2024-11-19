import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CaseStudiesComponent} from "./case-studies.component";
import {CaseStudiesRoutingModule} from "./case-studies-routing.module";
import {CaseStudiesPageComp} from "./case-studies-page/CaseStudiesPageComp";


@NgModule({
  declarations: [
    CaseStudiesComponent,
    CaseStudiesPageComp
  ],

  imports: [
    CommonModule,
    CaseStudiesRoutingModule
  ],
  providers: []
})
export class CaseStudiesModule {
}
