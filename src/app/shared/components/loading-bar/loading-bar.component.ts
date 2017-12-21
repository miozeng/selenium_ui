import { Component, OnInit,Injectable } from '@angular/core';

@Component({
  selector: 'loading-bar',
  templateUrl: './loading-bar.component.html'//,
  //styleUrls: ['./loading-bar.component.less']
})

@Injectable()
export class LoadingBarComponent implements OnInit {
  show: boolean = false;

  constructor() {
   // LoadingBarService.loading = this;
  }

  ngOnInit() {
  }

  open() {
    this.show = true;
  }

  close() {
    this.show = false;
  }
}
