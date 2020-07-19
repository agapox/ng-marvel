import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SandboxModule } from './sandbox/sandbox.module';

import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const allModules = [
  CommonModule,
  FormsModule,
  ViewsRoutingModule,
  SharedModule,
  SandboxModule
];
const allComponents = [
  HomeComponent,
  SandboxComponent
];

@NgModule({
  declarations: [...allComponents, HeroDetailsComponent],
  imports: [...allModules]
})
export class ViewsModule { }
