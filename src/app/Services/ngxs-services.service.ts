import { Injectable } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { AddAnimal } from '../store/actions/animal.action';

@Injectable({
  providedIn: 'root'
})
export class NgxsServicesService {
  @Select(state =>state.animals) animals$: Observable<any>;

  constructor( private store: Store ) { }
  addAnimal(name: string) {
    this.store
    .dispatch(new AddAnimal(name))
    .pipe(withLatestFrom(this.animals$))
    .subscribe(([_, animals]) => {
      // do something with animals
      this.form.reset();
    });    
    console.log('name:' + name)
    
  }
}
