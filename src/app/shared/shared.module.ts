import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AtomsModule } from './atoms/atoms.module';
import { CardDefaultComponent } from './card-default/card-default.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

let allComponents = [
  CardDefaultComponent,
  SearchBarComponent,
  FooterComponent,
  HeaderComponent
];
let allModules = [
  RouterModule,
  AtomsModule
]

@NgModule({
  declarations: [...allComponents],
  imports: [
    CommonModule,
    allModules,
  ],
  exports: [...allComponents, ...allModules]
})
export class SharedModule { }
