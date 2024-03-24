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
      image: 'assets/images/projets.png',
      link: 'https://youtube.com',
    },
    {
      name: 'Project 2',
      image: 'assets/images/projets.png',
      tags: ['Angular', 'TypeScript'],
    },
    {
      name: 'Project 3',
      tags: ['Angular', 'TypeScript'],
      image: 'assets/images/projets.png',
      link: 'https://youtube.com',
    },
    {
      name: 'Project 1',
      tags: ['Angular', 'TypeScript'],
      image: 'assets/images/projets.png',
      link: 'https://youtube.com',
    },
    {
      name: 'Project 2',
      image: 'assets/images/projets.png',
      tags: ['Angular', 'TypeScript'],
    },
    {
      name: 'Project 3',
      tags: ['Angular', 'TypeScript'],
      image: 'assets/images/projets.png',
      link: 'https://youtube.com',
    },
  ];

  shownProjects: Project[] = [];
  selectedTags: string[] = [];

  constructor() {}

  ngOnInit(): void {
    const grid = document.querySelector('#grid');
    const gradientTop = document.querySelector('#gradient-top') as HTMLElement;

    grid?.addEventListener('scroll', (event: any) => {
      event.preventDefault();

      const scrollTop = grid.scrollTop;
      const clientHeight = grid.clientHeight;

      const topGradientHeight = Math.min(scrollTop, clientHeight / 2);

      gradientTop.style.height = `${topGradientHeight / 2}px`;
    });

    this.shownProjects = this.projects;
  }

  setTags(event: string[]): void {
    this.selectedTags = event;
    this.shownProjects = this.projects.filter((project) => {
      return event.filter((tag) => project.tags.includes(tag));
    });
  }
}
