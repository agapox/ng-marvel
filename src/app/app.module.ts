import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ViewsModule } from './views/views.module';

import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';

const allModules = [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  SharedModule,
  ViewsModule
];
const allComponents = [
  AppComponent,
  ViewsComponent
];

@NgModule({
  declarations: [...allComponents],
  imports: [
    HttpClientModule,
    ...allModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
