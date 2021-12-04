import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomUserModule } from './random-user/random-user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RandomUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
