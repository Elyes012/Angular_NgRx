import { Component } from '@angular/core';
// injection du module
import {Store} from '@ngrx/store'
import { increamentAction, deccreamentAction } from './store/actions/counter.actions';
import { StoreInterface } from './store/store';
import { nSelector } from './store/reducers/counter.reducers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number;
  // ajout type du store
  constructor(private store: Store<StoreInterface>){

    // surveillance du state
    this.store.select(nSelector).subscribe(data => console.log(data) )
  }
  // Choisir l'action à realiser
  increase() {
    this.store.dispatch(new increamentAction(2))
  }

  decrease() {
    this.store.dispatch(new deccreamentAction(2))
  }
}
