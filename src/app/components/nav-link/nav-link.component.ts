import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrl: './nav-link.component.scss',
})
export class NavLinkComponent {
  @Input()
  title!: string;

  @Input()
  icon!: IconProp;

  @Input()
  isActive: boolean = false;
}
