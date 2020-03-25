import {CustomAction} from '../store'
import { INCREMENT, DECREAMENT } from '../actions/counter.actions'
import { createFeatureSelector, createSelector } from '@ngrx/store'

// initialiser state = 0
let initialState = {
    n: 0,
    changes : 0
}

export interface Counter {
    n : number,
    changes : number,
}


// initialiser reducer qui une fonction (state, action)
// action contient type de l'action & payload = data
export function counterReducer(state = initialState, action : CustomAction) {
   switch(action.type) { 
       case INCREMENT:
           return {
                ...state,
                n: state.n + action.payload
           }
       case DECREAMENT:
        return {
            ...state,
            n: state.n - action.payload
        }
        default : 
            return state
   }
}

// Creation selector
let counterFs = createFeatureSelector<Counter>('counter')

export let nSelector = createSelector(counterFs, state => state.n)
