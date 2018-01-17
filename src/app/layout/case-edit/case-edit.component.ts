import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../layout.service';
import { Module } from '../module/module';
import { Case } from '../case/case';

@Component({
    selector: 'app-module-edit',
    templateUrl: './case-edit.component.html',
    styleUrls: ['./case-edit.component.scss'],
    animations: [routerTransition()]
})
export class CaseEditComponent implements OnInit {
      moduleId: number;
      caseId: number;
      module= new Module();
      case= new Case();
	  constructor(private layoutService: LayoutService, private route: ActivatedRoute, private router: Router) {}
  
	  ngOnInit() {
	     this.route.params.subscribe((params) => this.moduleId = params.moduleId);
	     this.route.params.subscribe((params) => this.caseId = params.caseId);
		 if(this.caseId != 0){
		       this.layoutService.get_case_byid(this.caseId).subscribe((res : Case)=>{
		             this.case = res;
		             this.module.modulId = this.moduleId;
		             this.case.modul = this.module;
				  });
		  }else{
		   this.module.modulId = this.moduleId;
		   this.case.modul = this.module;
		  }
	   }
  
	   onSubmit() { 
	     this.layoutService.post_case(this.case).subscribe(
	            (val) => {
	                console.log("POST call successful value returned in body",  val);
	                
	            },
	            response => {
	                alert("save case in error");
	            },
	            () => {
	                console.log("The POST observable is now completed.");
					//window.location.href = "/listcase/"+this.moduleId;
					this.router.navigate(['listcase/'+this.moduleId]);
	            });
	     
	     }
	     
	   back(){
		 //window.location.href = "/listcase/"+this.moduleId;
		 this.router.navigate(['listcase/'+this.moduleId]);
	   }
}
