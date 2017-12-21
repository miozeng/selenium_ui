import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', loadChildren: './project/project.module#ProjectModule' },
            { path: 'project', loadChildren: './project/project.module#ProjectModule' },
            { path: 'projectedit/:projectId', loadChildren: './project-edit/project-edit.module#ProjectEditModule' },
            { path: 'module/:projectId', loadChildren: './module/module.module#ModuleModule' },
            { path: 'moduleedit/:projectId/:moduleId', loadChildren: './module-edit/module-edit.module#ModuleEditModule' },
            { path: 'case/:moduleId', loadChildren: './case/case.module#CaseModule' },
            { path: 'caseedit/:moduleId/:caseId', loadChildren: './case-edit/case-edit.module#CaseEditModule' },
            { path: 'step/:caseId', loadChildren: './step/step.module#StepModule' },
            { path: 'stepedit/:caseId/:stepId', loadChildren: './step-edit/step-edit.module#StepEditModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
