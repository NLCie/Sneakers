import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { RecupApiService } from '../../Services/recup-api.service';

@Component({
  selector: 'app-women-collections',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './women-collections.component.html',
  styleUrl: './women-collections.component.scss'
})
export class WomenCollectionsComponent {
  apiData: any;

  images: string[] = ['1women.jpg', '2women.jpg', '3women.jpg', '4women.jpg', '5women.jpg', '6women.jpg', '7women.jpg', 
  '8women.jpg', '9women.jpg', '10women.jpg', '11women.jpg', '12women.jpg']
  constructor( private apiService: RecupApiService){ }
  
  ngOnInit(){
    console.log('start of calling the api');

    this.apiService.getConfig().subscribe((infoApi): any => {
      this.apiData = infoApi;
    })
    console.log('fin de l appel de l api')
  }
}
