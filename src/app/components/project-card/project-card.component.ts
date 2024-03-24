import { Component, Input } from '@angular/core';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input()
  projet!: Project;

  icon = faExternalLink;

  constructor() {}

  openLink(link: string): void {
    window.open(link, '_blank');
  }

  changeTagActiveState(tag: string, event: boolean): void {}
}
