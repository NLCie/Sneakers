import { Component } from '@angular/core';
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
export class MenCollectionsComponent  {
  apiData: any;
  constructor( ){ }

  ngOnInit(): void{
    // this.apiService.getConfig().subscribe(infoApi => {
    //   this.apiData = infoApi;
    // })
  }
}
