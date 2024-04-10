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
  // Visible: boolean= false;
  images = [{image:'1women.jpg', isVisible: false}, {image:'2women.jpg', isVisible: false}, {image:'3women.jpg', isVisible: false}, {image:'4women.jpg', isVisible: false}, {image:'5women.jpg', isVisible: false}, {image:'6women.jpg', isVisible: false}, {image:'7women.jpg', isVisible: false}, 
  {image:'8women.jpg', isVisible: false}, {image:'9women.jpg', isVisible: false}, {image:'10women.jpg', isVisible: false}, {image:'11women.jpg', isVisible: false}, {image:'12women.jpg', isVisible: false}]
  constructor( private apiService: RecupApiService){ }
  
  ngOnInit(){
    console.log('start of calling the api');

    this.apiService.getConfig().subscribe((infoApi): any => {
      this.apiData = infoApi;
    })
    console.log('fin de l appel de l api')
  }
}
