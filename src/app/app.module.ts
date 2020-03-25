import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ajout le module StoreModule 
import {StoreModule} from '@ngrx/store';
// ajout de la fonction counterReducer


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { redusers } from './store/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import du module, le nom counter à choisir
    StoreModule.forRoot(redusers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
