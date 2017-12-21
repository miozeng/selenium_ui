import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { HttpClientModule,  HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpLogInterceptor } from '../../shared/interceptor/http.interceptor';

import { CaseEditRoutingModule } from './case-edit-routing.module';
import { CaseEditComponent } from './case-edit.component';
import { PageHeaderModule } from './../../shared';
import { LayoutService } from '../layout.service';

@NgModule({
    imports: [
        CommonModule,
        CaseEditRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        FormsModule ,
        HttpClientModule
    ],
    providers: [LayoutService ,
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true } ],
    declarations: [CaseEditComponent]
})
export class CaseEditModule { }
