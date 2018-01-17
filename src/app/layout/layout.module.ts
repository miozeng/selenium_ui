import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,  HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent,LoadingBarComponent } from '../shared';
import { ProjctMenuComponent } from './projectmenu/pm.component';
import { MyHttpLogInterceptor } from '../shared/interceptor/http.interceptor';

import { LayoutService } from './layout.service';
import { LoadingModule } from 'ngx-loading';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        HttpClientModule,
        TranslateModule,
        LoadingModule
    ],
    providers: [LayoutService, { provide: HTTP_INTERCEPTORS, useClass: MyHttpLogInterceptor, multi: true } ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        ProjctMenuComponent,
        LoadingBarComponent
       // LayoutService
    ]
})
export class LayoutModule { }
