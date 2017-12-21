import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { LayoutService } from '../layout.service';
import { Module } from '../module/module';
import { Project } from '../project/project';

@Component({
    selector: 'app-module-edit',
    templateUrl: './module-edit.component.html',
    styleUrls: ['./module-edit.component.scss'],
    animations: [routerTransition()]
})
export class ModuleEditComponent implements OnInit {
      moduleId: number;
      projectId: number;
      module= new Module();
      project= new Project();
      constructor(private layoutService: LayoutService, private route: ActivatedRoute) {}
  
	  ngOnInit() {
	     this.route.params.subscribe((params) => this.moduleId = params.moduleId);
	      this.route.params.subscribe((params) => this.projectId = params.projectId);
		 if(this.moduleId != 0){
		       this.layoutService.get_module_byid(this.moduleId).subscribe((res : Module)=>{
		             this.module = res;
				  });
		  }else{
		   this.project.projectId = this.projectId;
		   this.module.project = this.project;
		  }
	   }
  
	   onSubmit() { 
	     this.layoutService.post_module(this.module).subscribe(
	            (val) => {
	                console.log("POST call successful value returned in body",  val);
	                
	            },
	            response => {
	                alert("save module in error");
	            },
	            () => {
	                console.log("The POST observable is now completed.");
	                window.location.href = "/module/"+this.projectId;
	            });
	     
	     }
	     
	     back(){
	     window.location.href = "/module/"+this.projectId;
	   }
}
