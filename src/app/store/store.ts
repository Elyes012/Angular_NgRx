import { Counter, counterReducer,  } from './reducers/counter.reducers';
import { ActionReducerMap } from '@ngrx/store';






export interface StoreInterface {
    counter: Counter
}


export interface CustomAction {
    type : string,
    payload : any
}

export const redusers : ActionReducerMap<StoreInterface> = { counter: counterReducer} 