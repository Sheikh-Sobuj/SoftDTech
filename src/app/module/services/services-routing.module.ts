import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServicesComponent} from "./services.component";
import {UiUxComp} from "./ui-ux/Ui-UxComp";
import {GraphicDesignComp} from "./graphic-design/GraphicDesignComp";




const routes: Routes = [{
  path: '',
  component: ServicesComponent,
  children: [
    {
      path: 'ui-ux',
      component: UiUxComp,
    },
    {
      path: 'graphic-design',
      component: GraphicDesignComp,
    },
    ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {
}
