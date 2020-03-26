import { Counter, counterReducer  } from './reducers/counter.reducers';
import {ToDo, TodosReducer} from './reducers/todos.reducers'
import { ActionReducerMap } from '@ngrx/store';






export interface StoreInterface {
    counter: Counter,
    todos: ToDo[]
}


export interface CustomAction {
    type : string,
    payload : any
}


export const redusers : ActionReducerMap<StoreInterface> = { 
    counter: counterReducer,
    todos: TodosReducer
}

