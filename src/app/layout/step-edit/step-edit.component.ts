import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import { LayoutService } from '../layout.service';
import { Step } from '../step/step';
import { Case } from '../case/case';

@Component({
    selector: 'app-module-edit',
    templateUrl: './step-edit.component.html',
    styleUrls: ['./step-edit.component.scss'],
    animations: [routerTransition()]
})
export class StepEditComponent implements OnInit {
      stepId: number;
      step= new Step();
      case= new Case();
      caseId: number;
      constructor(private layoutService: LayoutService, private route: ActivatedRoute, private router: Router) {}
  
	  ngOnInit() {
	      this.route.params.subscribe((params) => this.stepId = params.stepId);
	       this.route.params.subscribe((params) => this.caseId = params.caseId);
		 if(this.stepId != 0){
		       this.layoutService.get_step_byid(this.stepId).subscribe((res : Step)=>{
		             this.step = res;
				  });
		  }else{
		    this.layoutService.get_maxSeq_byid(this.caseId).subscribe((res : any)=>{
		             this.step.sequence = res;
				  });
		   this.case.caseId = this.caseId;
		   this.step.testCase = this.case;
		  }
	   }
  
	   onSubmit() { 
	     this.layoutService.post_step(this.step).subscribe(
	            (val) => {
	                console.log("POST call successful value returned in body",  val);
	                
	            },
	            response => {
	                alert("save module in error");
	            },
	            () => {
	                console.log("The POST observable is now completed.");
					//window.location.href = "/liststep/"+this.caseId;
					this.router.navigate(['liststep/'+this.caseId]);
	            });
	     
	     }
	    back(){
		// window.location.href = "/liststep/"+this.caseId;
		 this.router.navigate(['liststep/'+this.caseId]);
	    }
}
