import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap/alert';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivateInfoComponent } from './private-info/private-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PrivateInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
