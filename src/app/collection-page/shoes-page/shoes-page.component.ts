import { Component } from '@angular/core';

import { Store } from '@ngxs/store';
import {FormBuilder ,FormGroup, ReactiveFormsModule } from '@angular/forms'
import { FeedZebra, ZebraFood } from '../../store/actions/animal.action';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { Observable } from 'rxjs';
import { stat } from 'fs';
import { FormControl } from '@angular/forms';
import { NgxsServicesService } from '../../Services/ngxs-services.service';

@Component({
  selector: 'app-shoes-page',
  standalone: true,
  imports: [NavBarComponent, ReactiveFormsModule],
  templateUrl: './shoes-page.component.html',
  styleUrl: './shoes-page.component.scss'
})
export class ShoesPageComponent {
  
  inputForm: FormGroup<any> ;
  inputValue: FormControl = new FormControl();

  constructor(private formBuilder: FormBuilder, private ngxsService: NgxsServicesService) {
    this.inputForm = this.formBuilder.group({
      name: [''],
      hay: [''],
      carrots: ['']
    })
  }
  feedZebraNewValue() {
    const { name } = this.inputForm.value;
    
    this.ngxsService.updateInputValue({
      name,
      hay: 0,
      carrots: 0
    });
    console.log(name)
    }
}
