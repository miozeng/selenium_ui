import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', loadChildren: './project/project.module#ProjectModule' },
            { path: 'listproject', loadChildren: './project/project.module#ProjectModule' },
            { path: 'projectedit/:projectId', loadChildren: './project-edit/project-edit.module#ProjectEditModule' },
            { path: 'listmodule/:projectId', loadChildren: './module/module.module#ModuleModule' },
            { path: 'moduleedit/:projectId/:moduleId', loadChildren: './module-edit/module-edit.module#ModuleEditModule' },
            { path: 'listcase/:moduleId', loadChildren: './case/case.module#CaseModule' },
            { path: 'caseedit/:moduleId/:caseId', loadChildren: './case-edit/case-edit.module#CaseEditModule' },
            { path: 'liststep/:caseId', loadChildren: './step/step.module#StepModule' },
            { path: 'stepedit/:caseId/:stepId', loadChildren: './step-edit/step-edit.module#StepEditModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
