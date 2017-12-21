import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable()
export class LayoutService {

  baseUrl:string = "http://localhost:8080/selenium_tools";
  constructor(private httpClient : HttpClient) { 
    
  }
  get_base_url(){
     return this.baseUrl;
  }
    get_projects(){
       return this.httpClient.get(this.baseUrl +'/project/list');
    }
    get_project_byid(id){
	   return this.httpClient.get(this.baseUrl +'/project/findById/'+id);
	}
	run_project_test(id,iscreate){
	   return this.httpClient.get(this.baseUrl +'/project/runTest/'+id+'/'+iscreate);
	}
  
    post_project(project){
      return this.httpClient.post(this.baseUrl + '/project/save',project);
    }
    delete_project_byid(id){
	   return this.httpClient.get(this.baseUrl +'/project/delete/'+id);
	}
    
    
    get_modules(projectId){
       return this.httpClient.get(this.baseUrl +'/modul/list/'+projectId);
    }
    get_module_byid(id){
	   return this.httpClient.get(this.baseUrl +'/modul/findById/'+id);
	}
	run_module_test(id,iscreate){
	   return this.httpClient.get(this.baseUrl +'/modul/runTest/'+id+'/'+iscreate);
	}
  
    post_module(module){
      return this.httpClient.post(this.baseUrl + '/modul/save',module);
    }
    delete_module_byid(id){
	   return this.httpClient.get(this.baseUrl +'/modul/delete/'+id);
	}
    
   get_cases(moduleId){
       return this.httpClient.get(this.baseUrl +'/testcase/list/'+moduleId);
    }
    get_case_byid(id){
	   return this.httpClient.get(this.baseUrl +'/testcase/findById/'+id);
	}
	run_case_test(id){
	   return this.httpClient.get(this.baseUrl +'/testcase/excutecase/'+id);
	}

    post_case(c){
      return this.httpClient.post(this.baseUrl + '/testcase/save',c);
    }
     delete_case_byid(id){
	   return this.httpClient.get(this.baseUrl +'/testcase/delete/'+id);
	}
	download_case_test(id){
	  // return this.httpClient.get(this.baseUrl +'/testcase/casetocvs/?caseId='+id);
	    window.location.href = this.baseUrl +'/testcase/casetocvs/?caseId='+id;
	}
	
    url_cvsimport(moduleId){
      return this.baseUrl + '/testcase/cvsimport/'+moduleId;
    }
    url_cvsexcut(){
     return this.baseUrl + '/testcase/cvsexcut';
    }
 
 
    
    
    get_steps(caseId){
       return this.httpClient.get(this.baseUrl +'/step/list/'+caseId);
    }
   get_maxSeq_byid(caseId){
	   return this.httpClient.get(this.baseUrl +'/step/getMaxSeq/'+caseId);
	}
   get_step_byid(id){
	   return this.httpClient.get(this.baseUrl +'/step/findById/'+id);
	}
	
	 delete_step_byid(id){
	   return this.httpClient.get(this.baseUrl +'/step/delete/'+id);
	}
	
    post_step(step){
      return this.httpClient.post(this.baseUrl + '/step/save',step);
    }
  
}