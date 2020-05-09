import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';

let atomsComponents = [
  AvatarComponent
];

@NgModule({
  declarations: [...atomsComponents],
  imports: [
    CommonModule
  ],
  exports: [...atomsComponents]
})
export class AtomsModule { }
