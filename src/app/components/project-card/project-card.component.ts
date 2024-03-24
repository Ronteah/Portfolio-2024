import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input()
  project!: Project;

  @Input()
  selectedTags: string[] = [];

  @Output()
  emitSelectedTags: EventEmitter<string[]> = new EventEmitter<string[]>();

  icon = faExternalLink;

  constructor() {}

  openLink(link: string): void {
    window.open(link, '_blank');
  }

  changeTagActiveState(tag: string, event: boolean): void {
    if (event) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(
        (selectedTag) => selectedTag !== tag
      );
    }
    this.emitSelectedTags.emit(this.selectedTags);
  }
}
