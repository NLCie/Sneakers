import { Component, OnInit } from '@angular/core';
import { RecupApiService } from '../../Services/recup-api.service';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';

@Component({
  selector: 'app-men-collections',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './men-collections.component.html',
  styleUrl: './men-collections.component.scss'
})
export class MenCollectionsComponent implements OnInit {
  apiData: any;
  images: string[] = ['1.jpg', '1men.jpg', '2men.jpg', '3men.jpg', '4men.jpg', '5men.jpg', '6men.jpg', 
  '7men.jpg', '8men.jpg', '9men.jpg', '10men.jpg', '11men.jpg']
  constructor( private apiService: RecupApiService){ }
  
  ngOnInit(){
    console.log('start of calling the api');

    this.apiService.getConfig().subscribe((infoApi): any => {
      this.apiData = infoApi;
    })
    console.log('fin de l appel de l api')
  }
}
