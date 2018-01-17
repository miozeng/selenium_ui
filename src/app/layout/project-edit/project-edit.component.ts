import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import { LayoutService } from '../layout.service';
import { Project } from '../project/project';

@Component({
    selector: 'app-project-edit',
    templateUrl: './project-edit.component.html',
    styleUrls: ['./project-edit.component.scss'],
    animations: [routerTransition()]
})
export class ProjectEditComponent implements OnInit {
      projectId: number;
      project= new Project();
      constructor(private layoutService: LayoutService, private route: ActivatedRoute, private router: Router) {}
  
	  ngOnInit() {
	     this.route.params.subscribe((params) => this.projectId = params.projectId);
		 if(this.projectId != 0){
		       this.layoutService.get_project_byid(this.projectId).subscribe((res : Project)=>{
		             this.project = res;
				  });
		  }
	   }
  
	   onSubmit() { 
	     this.layoutService.post_project(this.project).subscribe(
	            (val) => {
	                console.log("POST call successful value returned in body",  val);
	                
	            },
	            response => {
	                alert("save project in error");
	            },
	            () => {
	                console.log("The POST observable is now completed.");
					//window.location.href = "/listproject";
					this.router.navigate(['listproject']);
	            });
	     
	     }
	     
	       back(){
		// window.location.href = "/listproject";
		 this.router.navigate(['listproject']);
	   }
}
