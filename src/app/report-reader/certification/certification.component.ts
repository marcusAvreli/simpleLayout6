import {Component, OnInit,OnDestroy, Inject, ChangeDetectionStrategy,Pipe} from '@angular/core';
//import {TranslateService} from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// observable
import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/observable/from';
import { from } from 'rxjs/observable/from';
import {  Actions } from '@ngrx/effects';
import * as states from './../../ngrx/reducers';

import {take,filter,map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
// models
//import {Hero} from '../shared/hero';

//import {AppState} from '../app.state';
//import {GetAllHeroes} from './store/heroes.actions';
import * as myReportActions from '../store/myReport.actions';
import * as fromRoot from '../store/myReport.reducer';
import { MyReportModel } from '../shared/myReport.model';
//import * as states from './../../ngrx/reducers';
// NgRx
import {Store} from '@ngrx/store';
//import * as heroActions from '../store/heroes.actions';
//import {AppState} from '../../app.state';
//import {getAllHeroes} from '../store/heroes.reducers';
import * as Rx from 'RxJS';





@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
  
})
export class CertificationComponent implements OnInit, OnDestroy {
 
 public myReports: Rx.Observable<Array<MyReportModel>>;

	myReportsArray: MyReportModel[]=[];
	//games: IGame[] = [...];
	headerStrArr = [];
	headersOfAny:any[];
	doctors :any[];


	constructor(
	){}
	ngOnInit(){ 
		console.log("init certification");
	}
	 ngOnDestroy() {
    console.log("destroy certification");
  }
	
}