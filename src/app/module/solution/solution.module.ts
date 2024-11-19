import {NgModule} from '@angular/core';
import {SolutionComponent} from './solution.component';
import {SolutionRoutingModule} from './solution-routing.module';
import {CommonModule} from '@angular/common';
import {SolutionPageComp} from "./solution-page/SolutionPageComp";

@NgModule({
  declarations: [
    SolutionComponent,
    SolutionPageComp
    ],

  imports: [
    CommonModule,
    SolutionRoutingModule,

  ],
  providers: [

  ]
})
export class SolutionModule {
}
