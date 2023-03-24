import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadfootComponent } from './headfoot/headfoot.component';
import { HeaderComponent } from './headfoot/header/header.component';
import { FooterComponent } from './headfoot/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadfootComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
