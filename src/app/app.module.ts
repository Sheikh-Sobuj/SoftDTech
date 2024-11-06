import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home2Component } from './Demo-Comp/home-2/home-2.component';
import {Home1Component} from "./Demo-Comp/home-1/home-1.component";
import { ErrorComponent } from './Demo-Comp/error/error.component';
import { AboutUsComponent } from './Demo-Comp/about-us/about-us.component';
import { BlogComponent } from './Demo-Comp/blog/blog.component';
import { CareersComponent } from './Demo-Comp/careers/careers.component';
import { ComingSoonComponent } from './Demo-Comp/coming-soon/coming-soon.component';
import { ContactComponent } from './Demo-Comp/contact/contact.component';
import { EventComponent } from './Demo-Comp/event/event.component';
import { FaqComponent } from './Demo-Comp/faq/faq.component';
import { IndexComponent } from './Demo-Comp/index/index.component';
import { PortfolioComponent } from './Demo-Comp/portfolio/portfolio.component';
import { PricesComponent } from './Demo-Comp/prices/prices.component';
import { ProjectComponent } from './Demo-Comp/project/project.component';
import { PublicationComponent } from './Demo-Comp/publication/publication.component';
import {Service1Component} from "./Demo-Comp/service-1/service-1.component";
import {Service2Component} from "./Demo-Comp/service-2/service-2.component";
import {Service3Component} from "./Demo-Comp/service-3/service-3.component";
import {Service4Component} from "./Demo-Comp/service-4/service-4.component";
import {Solution1Component} from "./Demo-Comp/solution-1/solution-1.component";
import {Solution2Component} from "./Demo-Comp/solution-2/solution-2.component";
import { TeamComponent } from './Demo-Comp/team/team.component';
import { TeamSingleComponent } from './Demo-Comp/team-single/team-single.component';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Home2Component,
    ErrorComponent,
    AboutUsComponent,
    BlogComponent,
    CareersComponent,
    ComingSoonComponent,
    ContactComponent,
    EventComponent,
    FaqComponent,
    IndexComponent,
    PortfolioComponent,
    PricesComponent,
    ProjectComponent,
    PublicationComponent,
    Service1Component,
    Service2Component,
    Service3Component,
    Service4Component,
    Solution1Component,
    Solution2Component,
    TeamComponent,
    TeamSingleComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
