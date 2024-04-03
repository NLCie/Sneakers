import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';

@Component({
  selector: 'app-women-collections',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './women-collections.component.html',
  styleUrl: './women-collections.component.scss'
})
export class WomenCollectionsComponent {

}
