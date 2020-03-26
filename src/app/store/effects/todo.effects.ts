import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { LOAD, SuccessAction, FailedAction } from '../actions/todos.action';

import {mergeMap, map, catchError} from 'rxjs/operators';
import {of} from 'rxjs'

@Injectable()
export class TodosEffect {
  // type of todoEffect Observable
    todoEffect = createEffect(() =>this.actions.pipe(
        // Connaitre le type d'actions
        ofType(LOAD),
        mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/todos')
        .pipe(
            map(data => new SuccessAction(data)),
                catchError((err) => of(new FailedAction(err)))
        ))

    ))

    constructor(private http: HttpClient, private actions: Actions) {

    }
}