import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesPageComponent } from './shoes-page/shoes-page.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';




@NgModule({
  declarations: [],
  imports: [
    CommonModule, ShoesPageComponent, NavBarComponent
  ], 
  exports: [ShoesPageComponent, NavBarComponent]
})
export class CollectionPageModule { }
