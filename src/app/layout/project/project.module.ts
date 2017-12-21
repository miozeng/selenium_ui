import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,  HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpLogInterceptor } from '../../shared/interceptor/http.interceptor';

import { LayoutService } from '../layout.service';
import { ProjectComponent } from './project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        ProjectRoutingModule,
        PageHeaderModule,
        HttpClientModule
    ],
    providers: [LayoutService,
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true } ],
    declarations: [ProjectComponent]
})
export class ProjectModule { }
