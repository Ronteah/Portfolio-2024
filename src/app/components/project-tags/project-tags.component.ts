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
    const gradientLeft = document.querySelector('#gradient-left');
    const gradientRight = document.querySelector('#gradient-right');

    container?.addEventListener('wheel', (event: any) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY;

      const isAtMaxScroll =
        container.scrollLeft === container.scrollWidth - container.clientWidth;
      const isAtMinScroll = container.scrollLeft === 0;

      if (isAtMaxScroll) {
        gradientRight?.classList.add('hidden');
      } else {
        gradientRight?.classList.remove('hidden');
      }

      if (isAtMinScroll) {
        gradientLeft?.classList.add('hidden');
      } else {
        gradientLeft?.classList.remove('hidden');
      }
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

    this.emitTags();
    this.sortTags();
  }

  emitTags(): void {
    this.emitSelectedTags.emit(this.selectedTags);
  }

  private sortTags(): void {
    this.tags = this.tags.sort();
  }
}
