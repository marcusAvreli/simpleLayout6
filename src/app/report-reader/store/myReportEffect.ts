import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
//import 'rxjs/add/observable/map';


import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from "rxjs/operators";

import { GoogleBooksService } from '../shared/idmReports';
//import * as book from '../actions/book';
import * as MyReportActions from './myReport.actions'


/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 * The `toPayload` helper function returns just
 * the payload of the currently dispatched action, useful in
 * instances where the current state is not necessary.
 *
 * Documentation on `toPayload` can be found here:
 * https://github.com/ngrx/effects/blob/master/docs/api.md#topayload
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */
//https://medium.com/front-end-weekly/an-intro-to-ngrx-effects-ngrx-store-with-angular-4-c55c4d1d5baf
//https://github.com/ngrx/example-app/blob/ee0f331bf808525e003efa264b5065964c7f942b/src/app/effects/book.ts
@Injectable()
export class myReportEffects {
 constructor(private actions$: Actions, private customApplications: GoogleBooksService) { }
 
		 Original
@Effect()
  search$: Observable<Action> = this.actions$
    .ofType(MyReportActions.GET_MY_REPORT)
    .debounceTime(300)
    .map(toPayload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }

      const nextSearch$ = this.actions$.ofType(MyReportActions.GET_MY_REPORT).skip(1);
	
	console.log("Effects called");
      return this.customApplications.getCustomApplications()
        .takeUntil(nextSearch$)
        .map(books => new MyReportActions.SearchCompleteAction(books))
        .catch(() => of(new MyReportActions.SearchCompleteAction([])));
    });


		
@Effect() 
searchFood$: Observable<Action> = this.actions$
 // Listen for the 'SEARCH' action
.ofType(MyReportActions.GET_MY_REPORT_POST)
.map(toPayload)
.switchMap(query => {
    return this.customApplications.searchFood(query)
    .map(results => new MyReportActions.SearchCompleteAction2(results));
  
});


}