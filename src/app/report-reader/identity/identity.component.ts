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
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class IdentityComponent implements OnInit, OnDestroy {
   //  myReports: Observable<MyReportModel[]>;
	public myReports: Rx.Observable<Array<MyReportModel>>;

	myReportsArray: MyReportModel[]=[];
	//games: IGame[] = [...];
	headerStrArr = [];
	headersOfAny:any[];
	doctors :any[];

	myReport: MyReportModel={name: '',email: '',displayName:'',description:'',id:0};
	private colHeadersSub = new BehaviorSubject<any[]>(undefined);
	private rowDataSub = new BehaviorSubject<any[]>(undefined);
	//myReports: Observable<MyReportModel[]>;
  //myReport: MyReportModel={name: '',email: ''};
 isLoading$: Observable<boolean>;
	colHeadersObs = this.colHeadersSub.asObservable();
	rowDataObs = this.rowDataSub.asObservable();
  
  
	 constructor(private store: Store<states.AppState>
) {
	
  }
	ngOnInit(){
		console.log("identity init started identity");
		
		this.loadReports();
		//this.myReports= this.store.select('myReport');	
		this.myReports = this.store.select(states.getCourses);
		this.myReports.subscribe(console.log);
		
		this.isLoading$ = this.store.select(states.getIsLoadingCourses);  		
		this.isLoading$.subscribe(console.log);
		this.processSuccess(this.myReports);	
		console.log("identity init finished");
	}
	
	
	loadReports(){
		console.log("load reports STARTED");
		this.store.dispatch({
		   type: myReportActions.GET_MY_REPORT     
		});		
		console.log("load reports FINISHED");
	}
 private processSuccess(res) {
	 console.log("=================process success started==================");
	//res.subscribe(res => {console.log("ProcessSuccess:"+res)});	
	res.subscribe(val => this.myReportsArray = val);
	
    this.headerStrArr = Object.keys(this.myReportsArray[0]);
	
	

/*var rowData2 = [
{name: "A", email: "xyz"}

];*/


this.headersOfAny = this.getArray(this.headerStrArr);


/*res.subscribe(
        (person) => {
		console.log("From Here:"+person.name)});*/
		
		// .map((person) => "Dr. " + person.name)
		
		
 //this.colHeadersSub.next(Object.assign([], "mark"));
 this.colHeadersSub.next(this.headersOfAny);

  //res.subscribe(console.log);
  
 /*  res.map(
         (response) ⇒ response.json()
      ).
      subscribe(
         (data) ⇒ {this.displaydata(data);}
      )
*/
/*res.subscribe({
  next(res) { console.log("sssss:"+res.email); },
  complete() { console.log('Finished sequence'); }
});*/

//res.map(x => this.posts=x.json());
	       // const categories = new Set(res.switchMap(x => x.name));

	//console.log("Printing posts: "+this.posts);
	//  this.posts.subscribe(console.log);

  //this.colHeadersSub.next(Object.keys(res));
  //console.log(this.myReportsArray[0].name);
  //res.subscribe(res => {console.log("ProcessSuccess:"+res)});
  res.subscribe(res => this.rowDataSub.next(res));
  //  this.rowDataSub.next(this.myReportsArray);
   console.log("process success FINISHED");
  }
	private getArray(items : any[] ) : any[] {
		return new Array().concat(items);
	}
	
	
	
// displaydata(data) {console.log("displayDataCalled");}

add() {
   console.log("add called");
   console.log("Name:"+this.myReport.name);
   console.log("FirstName:"+this.myReport.email);
   this.store.dispatch({
		   type: myReportActions.GET_MY_REPORT_POST,
			payload: this.myReport	   
		});
		/*this.loadReports();
		//this.myReports= this.store.select('myReport');	
		this.myReports = this.store.select(states.getCourses);
		this.myReports.subscribe(console.log);
		
		this.isLoading$ = this.store.select(states.getIsLoadingCourses);  		
		this.isLoading$.subscribe(console.log);
		this.processSuccess(this.myReports);	*/

  }
	
	
	
	 ngOnDestroy() {
		 console.log("destroy identity");
    
  }

}