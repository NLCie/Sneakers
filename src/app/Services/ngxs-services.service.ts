import { Injectable } from '@angular/core';


import { Store } from '@ngxs/store';
// import { InputData } from './models/input-data.model';
// import { UpdateInputValue } from './actions/input.actions';
import { FeedZebra, ZebraFood } from '../store/actions/animal.action';
import { Observable } from 'rxjs';

// import { Store, Select } from '@ngxs/store';
// import { Observable } from 'rxjs';
// import { withLatestFrom } from 'rxjs/operators';
// import { FeedZebra } from '../store/actions/animal.action';

@Injectable({
  providedIn: 'root'
})
export class NgxsServicesService {
  animals$: Observable<string[]> | undefined
  // @Select(state =>state.animals) animals$: Observable<any>;

  // constructor( private store: Store ) { }
  // addAnimal(name: string) {
  //   this.store
  //   .dispatch(new FeedZebra(name))
  //   .pipe(withLatestFrom(this.animals$))
  //   .subscribe(([_, animals]) => {
  //     // do something with animals
  //     this.form.reset();
  //   });    
  //   console.log('name:' + name)
    
  // }

  constructor(private store: Store) {
    this.animals$ = this.store.select(state => state.zoo.zebraFood)
  }

  updateInputValue(data: ZebraFood) {
    this.store.dispatch(new FeedZebra(data));
  }

}
