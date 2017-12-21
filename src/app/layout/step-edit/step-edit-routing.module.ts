import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepEditComponent } from './step-edit.component';

const routes: Routes = [
    { path: '', component: StepEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepEditRoutingModule { }
