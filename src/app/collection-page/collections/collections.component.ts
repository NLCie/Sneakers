import { Component } from '@angular/core';
import { ShoesPageComponent } from '../shoes-page/shoes-page.component';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [ShoesPageComponent],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss'
})
export class CollectionsComponent {

}
