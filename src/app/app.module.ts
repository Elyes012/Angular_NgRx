import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ajout le module StoreModule 
import {StoreModule} from '@ngrx/store';

import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// ajout de la fonction counterReducer

import { redusers } from './store/store';

// ajout du module effects pour la communication avec l'api
import { EffectsModule } from "@ngrx/effects";
import { TodosEffect } from './store/effects/todo.effects';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // import du module, le nom counter à choisir
    StoreModule.forRoot(redusers),
    // import du module
    EffectsModule.forRoot([TodosEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
