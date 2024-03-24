import { Component, ElementRef } from '@angular/core';
import { History } from '../../models/history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  shownHistories: { key: string; value: History[] }[] = [];

  histories = [
    {
      title: 'Title 1',
      year: '2018',
      description: 'Description 1',
      location: 'Location 1',
    },
    {
      title: 'Title 2',
      year: '2019',
      description: 'Description 1',
      location: 'Location 1',
    },
    {
      title: 'Title 3',
      year: '2019',
      description: 'Description 1',
      location: 'Location 1',
    },
    {
      title: 'Title 4',
      year: '2020',
      description: 'Description 1',
      location: 'Location 1',
    },
    {
      title: 'Title 5',
      year: '2021',
      description: 'Description 1',
      location: 'Location 1',
    },
    {
      title: 'Title 6',
      year: '2022',
      description: 'Description 1',
      location: 'Location 1',
    },
    {
      title: 'Title 7',
      year: '2022',
      description: 'Description 1',
      location: 'Location 1',
    },
    {
      title: 'Title 8',
      year: '2023',
      description: 'Description 1',
      location: 'Location 1',
    },
    {
      title: 'Title 9',
      year: '2024',
      description: 'Description 1',
      location: 'Location 1',
    },
  ];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initShownHistories();

    const container = document.querySelector('#container');
    container?.addEventListener('wheel', (event: any) => {
      this.checkSectionVisibility();
    });
  }

  scrollToSection(section: string, event: any): void {
    event.preventDefault();
    event.stopPropagation();

    const element = document.getElementsByClassName(section)[0];

    const liElements = this.elementRef.nativeElement.querySelectorAll('li');
    liElements.forEach((li: HTMLElement) => {
      li.classList.remove('active');
    });

    element?.classList.add('active');
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  checkSectionVisibility() {
    const sections = this.elementRef.nativeElement.querySelectorAll('section');
    const lis = this.elementRef.nativeElement.querySelectorAll('li');

    sections.forEach((section: HTMLElement, index: number) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        lis.forEach((li: HTMLElement) => {
          li.classList.remove('active');
        });
        lis[index].classList.add('active');
      }
    });
  }

  initShownHistories(): void {
    this.histories.forEach((history) => {
      const index = this.shownHistories.findIndex(
        (shownHistory) => shownHistory.key === history.year
      );
      if (index !== -1) {
        this.shownHistories[index].value.push(history);
      } else {
        this.shownHistories.push({ key: history.year, value: [history] });
      }
    });

    this.shownHistories.sort((a, b) => {
      return parseInt(b.key) - parseInt(a.key);
    });

    const highestKey = this.shownHistories.reduce((highest, current) => {
      return Number(current.key) > Number(highest) ? current.key : highest;
    }, '-Infinity');

    setTimeout(() => {
      document.getElementsByClassName(highestKey)[0]?.classList.add('active');
    }, 0);
  }
}
