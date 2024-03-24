import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-tags',
  templateUrl: './project-tags.component.html',
  styleUrl: './project-tags.component.scss',
})
export class ProjectTagsComponent {
  @Input()
  selectedTags: string[] = [];

  @Output()
  emitSelectedTags: EventEmitter<string[]> = new EventEmitter<string[]>();

  tags: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'SASS',
    'Bootstrap',
    'Material Design',
    'Firebase',
    'Firestore',
    'AngularFire',
    'RxJS',
    'NgRx',
    'Jasmine',
    'Karma',
    'Protractor',
    'Cypress',
    'Jest',
    'Puppeteer',
    'Webpack',
    'Babel',
    'ESLint',
    'Prettier',
    'Husky',
    'Lint-Staged',
  ];

  constructor() {}

  ngOnInit(): void {
    const container = document.querySelector('#scroll-container');
    container?.addEventListener('wheel', (event: any) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    });

    this.sortTags();
  }

  changeTagActiveState(tag: string, event: boolean): void {
    if (event) {
      this.selectedTags.unshift(tag);
      this.tags = this.tags.filter((selectedTag) => selectedTag !== tag);
    } else {
      this.selectedTags = this.selectedTags.filter(
        (selectedTag) => selectedTag !== tag
      );
      this.tags.push(tag);
    }

    this.sortTags();
  }

  emitTags(): void {
    this.emitSelectedTags.emit(this.selectedTags);
  }

  private sortTags(): void {
    this.tags = this.tags.sort();
  }
}
