import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { LayoutService } from '../layout.service';
import { Project } from './project';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    animations: [routerTransition()]
})
export class ProjectComponent implements OnInit {
     baseurl :string;
     private projects : Project[] = [];
     private productsObservable : Observable<Project[]> ; 
     private browserLang = 'en';
    constructor(private layoutService: LayoutService, private translate: TranslateService) {
        
    }

    ngOnInit() {
     this.browserLang = this.translate.getBrowserLang();
     this.baseurl = this.layoutService.get_base_url()+'/project/';
      this.layoutService.get_projects().subscribe((res : Project[])=>{
             this.projects = res;
		     console.log( "projects:"+res);
		  });
    
    }
    
      runTest(projectid) { 
	     this.layoutService.run_project_test(projectid,true).subscribe(
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
	                alert("run project test in error");
	            },
	            () => {
	                console.log("The POST observable is now completed.");
	            });
	     
	     }
	     
	     	delete(caseId) { 
		      if(confirm("delete it?")){
		       this.layoutService.delete_project_byid(caseId).subscribe(
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
