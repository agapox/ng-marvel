import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AtomsModule } from './atoms/atoms.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardDefaultComponent } from './card-default/card-default.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const allComponents = [
  HeaderComponent,
  FooterComponent,
  CardDefaultComponent,
  SearchBarComponent
];
const allModules = [
  CommonModule,
  RouterModule,
  AtomsModule
]

@NgModule({
  declarations: [...allComponents],
  imports: [...allModules],
  exports: [...allComponents, ...allModules]
})
export class SharedModule { }
