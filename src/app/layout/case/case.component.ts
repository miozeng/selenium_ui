import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { LayoutService } from '../layout.service';
import { Case } from './case';

@Component({
    selector: 'app-module',
    templateUrl: './case.component.html',
    animations: [routerTransition()]
})
export class CaseComponent implements OnInit {
     modulId: number;
     private cases : Case[] = [];
     private productsObservable : Observable<Case[]> ; 
     private browserLang = 'en';
     importuploader: FileUploader;
    constructor(private layoutService: LayoutService, private translate: TranslateService, private route: ActivatedRoute) {
        
    }


    ngOnInit() {
      this.browserLang = this.translate.getBrowserLang();
      this.route.params.subscribe((params) => this.modulId = params.moduleId);
      this.importuploader = new FileUploader({    
		    url: this.layoutService.url_cvsimport(this.modulId),  
		    method: "POST",    
		   // itemAlias: "uploadedfile",
		    autoUpload: false
	 });
	  this.importuploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
               console.log("item uploaded" + response);
            var responsePath = JSON.parse(response);
            if(responsePath.ret == true){
               location.reload();
            }
             if(responsePath.ret == false){
             alert(responsePath.msg);
            }
           
       };
      this.excuteuploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            console.log("item uploaded" + response);
            var responsePath = JSON.parse(response);
            if(responsePath.ret == true){
               
            }
            if(responsePath.ret == false){
             alert(responsePath.msg);
            }
            //angular.element("input[type='file']").value="";
           
        };
	 
		 if(this.modulId != 0){
		       this.layoutService.get_cases(this.modulId).subscribe((res : Case[])=>{
		             this.cases = res;
				  });
		  }
    
    }
    
    
	
	 excuteuploader: FileUploader = new FileUploader({    
	    url: this.layoutService.url_cvsexcut(),  
	    method: "POST",    
	    //itemAlias: "uploadedfile",
	    removeAfterUpload: true,
	    autoUpload: false
	});
	
	
      runTest(caseId) { 
	     this.layoutService.run_case_test(caseId).subscribe(
	            (val :any) => {
	                console.log("POST call successful value returned in body",  val);
	               if(val.ret == true){
	               alert("run done");
	               }
	            },
	            response => {
	                alert("run module test in error");
	            },
	            () => {
	                console.log("The POST observable is now completed.");
	            });
	     
	     }
	     
	    download(caseId) { 
	    	this.layoutService.download_case_test(caseId);
	    }
	     
	     import(){
	     	this.importuploader.uploadAll();
	     }
	  
	     excute(){
	     	this.excuteuploader.uploadAll();
	     	
	     }
	    delete(caseId) { 
		      if(confirm("delete it?")){
		       this.layoutService.delete_case_byid(caseId).subscribe(
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
