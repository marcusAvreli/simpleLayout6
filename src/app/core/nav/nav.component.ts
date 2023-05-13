import {Component, OnInit, Input} from '@angular/core';
import {Menu} from './menu';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
 // @Input() items: Menu[];

  constructor() {
  }

  ngOnInit() {
   /* if (!this.items || this.items.length === 0) {
     
        this.items =  [];
		this.items[0]={title:"identity", action:"report-reader"};
     
    }*/
  }
}
