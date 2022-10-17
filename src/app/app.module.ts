import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Http} from '@angular/common/http';
import { HttpModule } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule, HttpModule, //HttpClientModule
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
