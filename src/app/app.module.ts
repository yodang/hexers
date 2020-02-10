import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { HexAreaComponent } from './hex-area/hex-area.component';
import { HexDetailsComponent } from './hex-details/hex-details.component';
import { HexComponent } from './hex-area/hex/hex.component';

@NgModule({
  declarations: [
    AppComponent,
    HexAreaComponent,
    HexDetailsComponent,
    HexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
