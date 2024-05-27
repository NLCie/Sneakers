import { Injectable } from "@angular/core";
import { State, Action, StateContext } from '@ngxs/store'
import { AddAnimal } from "../actions/animal.action";

export interface ZooStateModel {
    feed: boolean;
}

@State<ZooStateModel> ({
    name: 'zoo',
    defaults: {
        feed: false
    }
})

@Injectable()
export class ZooState {
    @Action(FeedAnimals)
    feedAnimals(ctx: StateContext<ZooStateModel>, action: AddAnimal)
}