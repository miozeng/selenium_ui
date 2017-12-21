import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,  HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutService } from '../layout.service';
import { CaseComponent } from './case.component';
import { CaseRoutingModule } from './case-routing.module';
import { PageHeaderModule } from './../../shared';
import { FileUploadModule } from 'ng2-file-upload';
import { MyHttpLogInterceptor } from '../../shared/interceptor/http.interceptor';


@NgModule({
    imports: [
        CommonModule,
        CaseRoutingModule,
        PageHeaderModule,
        HttpClientModule,
        FileUploadModule
    ],
    providers: [LayoutService ,
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true } ],
    declarations: [CaseComponent]
})
export class CaseModule { }
