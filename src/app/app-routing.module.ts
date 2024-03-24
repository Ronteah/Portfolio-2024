import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProjectsPageComponent } from './components/pages/projects-page/projects-page.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ComponentsLibraryComponent } from './components/pages/components-library/components-library.component';
import { HistoryComponent } from './components/pages/history/history.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'library', component: ComponentsLibraryComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
