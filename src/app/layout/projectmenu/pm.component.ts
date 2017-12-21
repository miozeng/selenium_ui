import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';

import { LayoutService } from '../layout.service';
import { Project } from '../project/project';

@Component({
    selector: 'app-pm',
    templateUrl: './pm.component.html',
    styleUrls: ['./pm.component.scss']
})
export class ProjctMenuComponent  implements OnInit{
    isActive = false;
    showMenu = '';
     baseUrl:string = "http://localhost:8080/selenium_tools";
    eventCalled() {
        this.isActive = !this.isActive;
    }
      private projects : Project[] = [];
     private productsObservable : Observable<Project[]> ; 
     private browserLang = 'en';
    constructor(private httpClient : HttpClient, private translate: TranslateService) {
        
    }

    ngOnInit() {
     this.browserLang = this.translate.getBrowserLang();
      this.httpClient.get(this.baseUrl +'/project/showlist').subscribe((res : Project[])=>{
             this.projects = res;
		     console.log( "projects:"+res);
		  });
    
    }
    redirect(id: any) {
       window.location.href = "/module/"+id;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
