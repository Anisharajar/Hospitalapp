import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewdrComponent } from './viewdr/viewdr.component';
import { SearchdrComponent } from './searchdr/searchdr.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewdrComponent,
    SearchdrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
