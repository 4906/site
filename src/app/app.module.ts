import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YtRecentsComponent } from './yt-recents/yt-recents.component';
import { TinyTextComponent } from './tiny-text/tiny-text.component';

@NgModule({
  declarations: [
    AppComponent,
    YtRecentsComponent,
    TinyTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
