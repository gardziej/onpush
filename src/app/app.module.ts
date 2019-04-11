import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NormalComponent } from './normal/normal.component';
import { BadComponent } from './bad/bad.component';
import { GoodComponent } from './good/good.component';
import { BrokenComponent } from './broken/broken.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalComponent,
    BadComponent,
    GoodComponent,
    BrokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
