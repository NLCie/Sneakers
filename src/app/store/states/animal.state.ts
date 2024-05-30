import { Injectable } from "@angular/core";
import { State, Action, StateContext, Store } from '@ngxs/store'
import { FeedZebra, ZebraFood } from "../actions/animal.action";
// import { stat } from "node:fs";

export interface ZooStateModel {
    zebraFood: ZebraFood[];
}

@State<ZooStateModel> ({
    name: 'zoo',
    defaults: {
        zebraFood: []
    }
})

@Injectable()
export class ZooState {
    
    
    constructor(public store: Store){}
    @Action(FeedZebra)
    feedAnimals(ctx: StateContext<ZooStateModel>, action: FeedZebra) {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        zebraFood: [
            ...state.zebraFood,
            action.zebraToFeed
        ]
      });
      
      
    }
    feedZebraNewValue(zebraToFeed: ZebraFood) {
    
        this.store.dispatch(new FeedZebra(zebraToFeed));
        
        }
}
