import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from './layout.service';
import { MyHttpLogInterceptor } from '../shared/interceptor/http.interceptor';
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
     loading: boolean = false;
    constructor(public router: Router) {
      MyHttpLogInterceptor.loading = this;
       }

    ngOnInit() {
      
        if (this.router.url === '/') {
            this.router.navigate(['/project']);
        }
    }
    
     open() {
	    this.loading = true;
	  }
	
	  close() {
	    this.loading = false;
	  }

}
