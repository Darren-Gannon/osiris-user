import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomUserModule } from './random-user/random-user.module';
import { UserDisplayComponent } from './components/user-display/user-display.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent
  ],
  imports: [
    BrowserModule,
    RandomUserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
