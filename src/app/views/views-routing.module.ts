import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandboxComponent } from './sandbox/sandbox.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sandbox', component: SandboxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
