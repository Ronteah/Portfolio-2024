import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
})
export class ProjectsPageComponent {
  projects: Project[] = [
    {
      name: 'Project 1',
      tags: ['Angular', 'TypeScript'],
      link: 'https://youtube.com',
    },
    {
      name: 'Project 2',
      tags: ['Angular', 'TypeScript'],
    },
    {
      name: 'Project 3',
      tags: ['Angular', 'TypeScript'],
      link: 'https://youtube.com',
    },
    {
      name: 'Project 1',
      tags: ['Angular', 'TypeScript'],
      link: 'https://youtube.com',
    },
    {
      name: 'Project 2',
      tags: ['Angular', 'TypeScript'],
    },
    {
      name: 'Project 3',
      tags: ['Angular', 'TypeScript'],
      link: 'https://youtube.com',
    },
  ];
}
