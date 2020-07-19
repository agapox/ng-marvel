import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { ButtonComponent } from './button/button.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ButtonGobackComponent } from './button-goback/button-goback.component';

let atomsComponents = [
  AvatarComponent, ButtonComponent, HeroSectionComponent,
  ButtonGobackComponent
];

@NgModule({
  declarations: [...atomsComponents],
  imports: [
    CommonModule
  ],
  exports: [...atomsComponents]
})
export class AtomsModule { }
