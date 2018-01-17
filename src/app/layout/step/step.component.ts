import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import {Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../layout.service';
import { Step } from './step';
import { Case } from '../case/case';

@Component({
    selector: 'app-module',
    templateUrl: './step.component.html',
    animations: [routerTransition()]
})
export class StepComponent implements OnInit {
 public loading = false;
     caseId: number;
     baseurl :string;
      steps : Step[] = [];
     private productsObservable : Observable<Step[]> ; 
     private browserLang = 'en';
    constructor(private layoutService: LayoutService, private translate: TranslateService, private route: ActivatedRoute,private router: Router) {
        
    }

    ngOnInit() {
     this.browserLang = this.translate.getBrowserLang();
      this.route.params.subscribe((params) => this.caseId = params.caseId);
      this.baseurl = '/selenium_tools/project/';
		 if(this.caseId != 0){
		       this.layoutService.get_steps(this.caseId).subscribe((res : Step[])=>{
		             this.steps = res;
				  });
		  }
		  
    
    }
    
      delete(stepId) { 
	      if(confirm("delete it?")){
	       this.layoutService.delete_step_byid(stepId).subscribe(
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
	     
	    back(){
	       this.layoutService.get_case_byid(this.caseId).subscribe((res : Case)=>{
					// window.location.href = "/listcase/"+res.modul.modulId;
					 this.router.navigate(['listcase/'+res.modul.modulId]);
			});
	    }
}
