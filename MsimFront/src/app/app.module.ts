import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalatComponent } from './salat/salat.component';
import { SalatScreenComponent } from './salat-screen/salat-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SalatComponent,
    SalatScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
