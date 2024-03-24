import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { LinksComponent } from './components/links/links.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ComponentsLibraryComponent } from './components/components-library/components-library.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HistoryComponent } from './components/history/history.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectTagsComponent } from './components/project-tags/project-tags.component';
import { ProjectTagComponent } from './components/project-tags/project-tag/project-tag.component';

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
