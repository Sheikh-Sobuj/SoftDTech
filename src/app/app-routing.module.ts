import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home1Component} from "./Demo-Comp/home-1/home-1.component";
import {IndexComponent} from "./Demo-Comp/index/index.component";
import {Home2Component} from "./Demo-Comp/home-2/home-2.component";
import {AboutUsComponent} from "./Demo-Comp/about-us/about-us.component";
import {BlogComponent} from "./Demo-Comp/blog/blog.component";
import {CareersComponent} from "./Demo-Comp/careers/careers.component";
import {ComingSoonComponent} from "./Demo-Comp/coming-soon/coming-soon.component";
import {ContactComponent} from "./Demo-Comp/contact/contact.component";
import {ErrorComponent} from "./Demo-Comp/error/error.component";
import {EventComponent} from "./Demo-Comp/event/event.component";
import {FaqComponent} from "./Demo-Comp/faq/faq.component";
import {PortfolioComponent} from "./Demo-Comp/portfolio/portfolio.component";
import {PricesComponent} from "./Demo-Comp/prices/prices.component";
import {ProjectComponent} from "./Demo-Comp/project/project.component";
import {PublicationComponent} from "./Demo-Comp/publication/publication.component";
import {Service1Component} from "./Demo-Comp/service-1/service-1.component";
import {Service2Component} from "./Demo-Comp/service-2/service-2.component";
import {Service3Component} from "./Demo-Comp/service-3/service-3.component";
import {Service4Component} from "./Demo-Comp/service-4/service-4.component";
import {Solution1Component} from "./Demo-Comp/solution-1/solution-1.component";
import {Solution2Component} from "./Demo-Comp/solution-2/solution-2.component";
import {Solution3Component} from "./Demo-Comp/solution-3/solution-3.component";
import {TeamComponent} from "./Demo-Comp/team/team.component";
import {TeamSingleComponent} from "./Demo-Comp/team-single/team-single.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'home_1',
    component: Home1Component,
  },
  {
    path: 'home_2',
    component: Home2Component,
  },
  {
    path: 'about_us',
    component: AboutUsComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'careers',
    component: CareersComponent,
  },
  {
    path: 'coming_soon',
    component: ComingSoonComponent,
  },
  {
    path: 'contact_us',
    component: ContactComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'prices',
    component: PricesComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'publication',
    component: PublicationComponent,
  },
  {
    path: 'service_1',
    component: Service1Component,
  },
  {
    path: 'service_2',
    component: Service2Component,
  },
  {
    path: 'service_3',
    component: Service3Component,
  },
  {
    path: 'service_4',
    component: Service4Component,
  },
  {
    path: 'solution_1',
    component: Solution1Component,
  },
  {
    path: 'solution_2',
    component: Solution2Component,
  },
  {
    path: 'solution_3',
    component: Solution3Component,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'team_single',
    component: TeamSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
