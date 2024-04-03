import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';

@Component({
  selector: 'app-contact-nav',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './contact-nav.component.html',
  styleUrl: './contact-nav.component.scss'
})
export class ContactNavComponent {

}
