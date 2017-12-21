import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,  HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpLogInterceptor } from '../../shared/interceptor/http.interceptor';

import { LayoutService } from '../layout.service';
import { StepComponent } from './step.component';
import { StepRoutingModule } from './step-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        StepRoutingModule,
        PageHeaderModule,
        HttpClientModule
    ],
    providers: [LayoutService,
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true } ],
    declarations: [StepComponent]
})
export class StepModule { }
