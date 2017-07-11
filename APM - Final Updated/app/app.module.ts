import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

/* Feature Modules */
import { ProductModule } from './products/product.module';
import { ChartModule } from 'angular2-highcharts';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    ProductModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
