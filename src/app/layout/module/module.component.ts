import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

import { LayoutService } from '../layout.service';
import { Module } from './module';

@Component({
    selector: 'app-module',
    templateUrl: './module.component.html',
    animations: [routerTransition()]
})
export class ModuleComponent implements OnInit {
    baseurl :string;
    projectId:number;
     private modules : Module[] = [];
     private productsObservable : Observable<Module[]> ; 
     private browserLang = 'en';
    constructor(private layoutService: LayoutService, private translate: TranslateService, private route: ActivatedRoute) {
        
    }

    ngOnInit() {
     this.browserLang = this.translate.getBrowserLang();
     this.baseurl = this.layoutService.get_base_url()+'/project/';
      this.route.params.subscribe((params) => this.projectId = params.projectId);
		 if(this.projectId != 0){
		       this.layoutService.get_modules(this.projectId).subscribe((res : Module[])=>{
		             this.modules = res;
				  });
		  }
    
    }
    
      runTest(moduleid) { 
	     this.layoutService.run_module_test(moduleid,true).subscribe(
	            (val :any) => {
	                console.log("POST call successful value returned in body",  val);
	                if(val.isrunOk == false){
			              alert(val.msg);
			        }
			        if(val.isdocOk == false){
			           alert("create document error");
			        }
	                  if(val.isdocOk == true && val.isrunOk == true){
			           alert("test done!");
			        }
	            },
	            response => {
	                alert("run module test in error");
	            },
	            () => {
	                console.log("The POST observable is now completed.");
	            });
	     
	     }
	     
	     	delete(caseId) { 
		      if(confirm("delete it?")){
		       this.layoutService.delete_module_byid(caseId).subscribe(
			            (val) => {
			                console.log("POST call successful value returned in body",  val);
			            },
			            response => {
			                alert("run delete test step in error");
			            },
			            () => {
			                location.reload();
			                console.log("The POST observable is now completed.");
			            });
		      }
		  }
}
