import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadfootComponent } from './headfoot/headfoot.component';
import { HeaderComponent } from './headfoot/header/header.component';
import { FooterComponent } from './headfoot/footer/footer.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'; 
import {MaterialModule} from './modules/material-ui/material-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadfootComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
