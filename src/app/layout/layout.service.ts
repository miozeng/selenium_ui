import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class LayoutService {

  constructor(private httpClient : HttpClient) { 
    
  }
 
    get_projects(){
       return this.httpClient.get('/selenium_tools/project/list');
    }
    get_project_byid(id){
	   return this.httpClient.get('/selenium_tools/project/findById/'+id);
	}
	run_project_test(id,iscreate){
	   return this.httpClient.get('/selenium_tools/project/runTest/'+id+'/'+iscreate);
	}
  
    post_project(project){
      return this.httpClient.post( '/selenium_tools/project/save',project);
    }
    delete_project_byid(id){
	   return this.httpClient.get('/selenium_tools/project/delete/'+id);
	}
    
    
    get_modules(projectId){
       return this.httpClient.get('/selenium_tools/modul/list/'+projectId);
    }
    get_module_byid(id){
	   return this.httpClient.get('/selenium_tools/modul/findById/'+id);
	}
	run_module_test(id,iscreate){
	   return this.httpClient.get('/selenium_tools/modul/runTest/'+id+'/'+iscreate);
	}
  
    post_module(module){
      return this.httpClient.post( '/selenium_tools/modul/save',module);
    }
    delete_module_byid(id){
	   return this.httpClient.get('/selenium_tools/modul/delete/'+id);
	}
    
   get_cases(moduleId){
       return this.httpClient.get('/selenium_tools/testcase/list/'+moduleId);
    }
    get_case_byid(id){
	   return this.httpClient.get('/selenium_tools/testcase/findById/'+id);
	}
	run_case_test(id){
	   return this.httpClient.get('/selenium_tools/testcase/excutecase/'+id);
	}

    post_case(c){
      return this.httpClient.post( '/selenium_tools/testcase/save',c);
    }
     delete_case_byid(id){
	   return this.httpClient.get('/selenium_tools/testcase/delete/'+id);
	}
	download_case_test(id){
	  // return this.httpClient.get('/selenium_tools/testcase/casetocvs/?caseId='+id);
	    window.location.href = '/selenium_tools/testcase/casetocvs/?caseId='+id;
	}
	
    url_cvsimport(moduleId){
      return  '/selenium_tools/testcase/cvsimport/'+moduleId;
    }
    url_cvsexcut(){
     return  '/selenium_tools/testcase/cvsexcut';
    }
 
 
    
    
    get_steps(caseId){
       return this.httpClient.get('/selenium_tools/step/list/'+caseId);
    }
   get_maxSeq_byid(caseId){
	   return this.httpClient.get('/selenium_tools/step/getMaxSeq/'+caseId);
	}
   get_step_byid(id){
	   return this.httpClient.get('/selenium_tools/step/findById/'+id);
	}
	
	 delete_step_byid(id){
	   return this.httpClient.get('/selenium_tools/step/delete/'+id);
	}
	
    post_step(step){
      return this.httpClient.post( '/selenium_tools/step/save',step);
    }
  
}