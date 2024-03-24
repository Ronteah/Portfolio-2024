import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faAt,
  faCode,
  faGraduationCap,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  links = [
    { title: 'Accueil', icon: faHome, isActive: false, url: '/' },
    { title: 'Projets', icon: faCode, isActive: false, url: '/projects' },
    {
      title: 'Mon parcours',
      icon: faGraduationCap,
      isActive: false,
      url: '/history',
    },
    { title: 'Contacter', icon: faAt, isActive: false, url: '/contact' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.links.map((link) => {
      if (link.url === this.router.url) {
        link.isActive = true;
      }
    });
  }
}
