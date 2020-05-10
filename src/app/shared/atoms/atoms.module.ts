import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { ButtonComponent } from './button/button.component';

let atomsComponents = [
  AvatarComponent
];

@NgModule({
  declarations: [...atomsComponents, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [...atomsComponents]
})
export class AtomsModule { }
