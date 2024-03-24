import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProjectsPageComponent } from './components/projects-page/projects-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { ComponentsLibraryComponent } from './components/components-library/components-library.component';
import { HistoryComponent } from './components/history/history.component';

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
