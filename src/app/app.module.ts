import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavLinkComponent } from './components/shared/navbar/nav-link/nav-link.component';
import { LinksComponent } from './components/shared/links/links.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { ComponentsLibraryComponent } from './components/pages/components-library/components-library.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { ProjectCardComponent } from './components/shared/project-card/project-card.component';
import { ProjectTagsComponent } from './components/shared/project-tags/project-tags.component';
import { ProjectTagComponent } from './components/shared/project-tags/project-tag/project-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavLinkComponent,
    LinksComponent,
    ProfileComponent,
    ContactComponent,
    ProjectsPageComponent,
    ComponentsLibraryComponent,
    HomePageComponent,
    HistoryComponent,
    ProjectCardComponent,
    ProjectTagsComponent,
    ProjectTagComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
