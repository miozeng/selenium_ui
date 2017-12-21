import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleEditComponent } from './module-edit.component';

const routes: Routes = [
    { path: '', component: ModuleEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEditRoutingModule { }
