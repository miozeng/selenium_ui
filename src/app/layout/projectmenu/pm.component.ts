import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
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
    eventCalled() {
        this.isActive = !this.isActive;
    }
     projects : Project[] = [];
     private productsObservable : Observable<Project[]> ; 
     private browserLang = 'en';
    constructor(private httpClient : HttpClient, private translate: TranslateService,private route: ActivatedRoute, private router: Router) {
        
    }

    ngOnInit() {
     this.browserLang = this.translate.getBrowserLang();
      this.httpClient.get('/selenium_tools/project/showlist').subscribe((res : Project[])=>{
             this.projects = res;
		     console.log( "projects:"+res);
		  });
    
    }
    redirect(id: any) {
        this.router.navigate(['/listmodule/'+id],{relativeTo: this.route});
        setTimeout(function(){ window.location.reload();},300);
       
       //window.location.href = "/listmodule/"+id;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
