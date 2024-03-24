import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-project-tag',
  templateUrl: './project-tag.component.html',
  styleUrl: './project-tag.component.scss',
})
export class ProjectTagComponent {
  @Input()
  name!: string;

  @Output()
  emitActiveState: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  isActive = false;

  constructor() {}

  toggleActiveState(event: any): void {
    event.preventDefault();
    event.stopPropagation();

    this.isActive = !this.isActive;
    this.emitActiveState.emit(this.isActive);
  }
}
