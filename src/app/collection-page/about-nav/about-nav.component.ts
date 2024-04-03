import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';

@Component({
  selector: 'app-about-nav',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './about-nav.component.html',
  styleUrl: './about-nav.component.scss'
})
export class AboutNavComponent {

}
