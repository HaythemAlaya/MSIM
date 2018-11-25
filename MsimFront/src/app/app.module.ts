import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalatComponent } from './salat/salat.component';
import { SalatScreenComponent } from './salat-screen/salat-screen.component';
import { ClockComponent } from './clock/clock.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    SalatComponent,
    SalatScreenComponent,
    ClockComponent,
    AnalogClockComponent,
    GeneralInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe,{ provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
