import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MbService {
  baseUrl:string = "http://localhost:8081/mb_service";
  
  constructor(private httpClient : HttpClient) { 
    
  }
  
  get_cities(){
    return this.httpClient.get(this.baseUrl +'/city/findAll');
  }
  get_agents(){
    return this.httpClient.get(this.baseUrl + '/test/getAgent');
  }


}