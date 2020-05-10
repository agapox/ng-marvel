import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SandboxModule } from './sandbox/sandbox.module';

import { HomeComponent } from './home/home.component';
import { SandboxComponent } from './sandbox/sandbox.component';

const allModules = [
  CommonModule,
  ViewsRoutingModule,
  SharedModule,
  SandboxModule
];
const allComponents = [
  HomeComponent,
  SandboxComponent
];

@NgModule({
  declarations: [...allComponents],
  imports: [...allModules]
})
export class ViewsModule { }
