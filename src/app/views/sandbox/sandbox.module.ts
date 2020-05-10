import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarSandboxComponent } from './avatar-sandbox/avatar-sandbox.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsSandboxComponent } from './buttons-sandbox/buttons-sandbox.component';

const allComponents = [
  AvatarSandboxComponent,
  ButtonsSandboxComponent,
];

@NgModule({
  declarations: [
    ...allComponents
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ...allComponents
  ]
})
export class SandboxModule { }
