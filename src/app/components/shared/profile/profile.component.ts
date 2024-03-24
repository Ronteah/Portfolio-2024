import { Component } from '@angular/core';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  instagram = faInstagram;
  linkedin = faLinkedin;
}
