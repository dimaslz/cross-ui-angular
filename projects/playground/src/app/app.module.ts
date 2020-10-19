import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgCrossUIModule } from '../../../angular/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCrossUIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
