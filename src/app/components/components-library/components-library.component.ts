import { Component } from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-components-library',
  templateUrl: './components-library.component.html',
  styleUrl: './components-library.component.scss',
})
export class ComponentsLibraryComponent {
  icon = faHome;
  projet_avec_lien: Project = {
    name: 'Test Library',
    tags: ['Angular', 'Tailwindcss', 'Développement'],
    link: 'https://youtube.com/',
  };
  projet_sans_lien: Project = {
    name: 'Test Library',
    tags: ['Angular', 'Tailwindcss', 'Développement'],
  };

  constructor() {}

  ngOnInit(): void {
    document.getElementsByTagName('html')[0].style.overflowY = 'scroll';
  }

  ngOnDestroy(): void {
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
  }
}
