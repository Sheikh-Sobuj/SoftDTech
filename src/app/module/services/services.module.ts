import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ServicesComponent} from "./services.component";
import {UiUxComp} from "./ui-ux/Ui-UxComp";
import {ServicesRoutingModule} from "./services-routing.module";
import {GraphicDesignComp} from "./graphic-design/GraphicDesignComp";


@NgModule({
  declarations: [
    ServicesComponent,
    UiUxComp,
    GraphicDesignComp,
    ],

  imports: [
    CommonModule,
    ServicesRoutingModule,
  ],
  providers: [

  ]
})
export class ServicesModule {
}
