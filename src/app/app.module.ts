import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home2Component } from './home-2/home-2.component';
import {Home1Component} from "./home-1/home-1.component";
import { ErrorComponent } from './error/error.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { FaqComponent } from './faq/faq.component';
import { IndexComponent } from './index/index.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricesComponent } from './prices/prices.component';
import { ProjectComponent } from './project/project.component';
import { PublicationComponent } from './publication/publication.component';
import {Service1Component} from "./service-1/service-1.component";
import {Service2Component} from "./service-2/service-2.component";
import {Service3Component} from "./service-3/service-3.component";
import {Service4Component} from "./service-4/service-4.component";
import {Solution1Component} from "./solution-1/solution-1.component";
import {Solution2Component} from "./solution-2/solution-2.component";
import { TeamComponent } from './team/team.component';
import { TeamSingleComponent } from './team-single/team-single.component';

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
