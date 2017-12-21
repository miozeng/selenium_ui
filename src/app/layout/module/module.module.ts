import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,  HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpLogInterceptor } from '../../shared/interceptor/http.interceptor';

import { LayoutService } from '../layout.service';
import { ModuleComponent } from './module.component';
import { ModuleRoutingModule } from './module-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        ModuleRoutingModule,
        PageHeaderModule,
        HttpClientModule
    ],
    providers: [LayoutService ,
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true } ],
    declarations: [ModuleComponent]
})
export class ModuleModule { }
