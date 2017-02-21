import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { C3TestComponent } from './c3-test/c3-test.component';
import { C3Test2Component } from './c3-test2/c3-test2.component';
import { C3Test3Component } from './c3-test3/c3-test3.component';

@NgModule({
  declarations: [
    AppComponent,
    C3TestComponent,
    C3Test2Component,
    C3Test3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
