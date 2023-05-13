import { Action } from '@ngrx/store'
import { MyReportModel } from '../shared/myReport.model'
import {AppAction} from '../../app.action';
import { CourseState, courseInitialState } from './myReport.state';

import { createSelector } from 'reselect';
//import {createFeatureSelector } from '@ngrx/store';
//import {AppState} from '../app.state';

//https://codeburst.io/angular-10-ngrx-store-by-example-333cbf16862c
//https://www.learmoreseekmore.com/2019/10/angular-state-management-with-ngrx.html
//https://www.carloscaballero.io/build-your-pokedex-part1-introduction-ngrx/
import * as MyReportActions from './myReport.actions'


//import { MyReportModel } from './models/myReport.model';
//import * as fromHeroes from './heroes/store/heroes.reducers';

//import { Product } from './product/product.model';
//https://github.com/ngrx/example-app/search?p=2&q=books
/*export interface State {
	
  readonly myReportModel: MyReportModel[];
	
  
}
*/

// Section 1
/*const initialState: MyReportModel[] = [{
    name: 'Initial Tutorial Report',
    email: 'empFirstName'
	
}]*/

export const GET_REPORT = 'GET_REPORT';


// Section 2
export function reducer(state=courseInitialState, action: MyReportActions.Actions) {

    // Section 3
	//console.log("typeof myReport.Reducer:"+(typeof action.payload));
	
    switch(action.type) {
		
		case MyReportActions.GET_MY_REPORT:
			 console.log("get my reports");
			
			// const myReportModel2 = action.payload;
           //  return action.payload;
		   //return Array.prototype.concat(action.payload);
		   return Object.assign({}, state, {
                reports: [
{name: "A", email: "xyz",displayName:"dsfds",description:"dddd",id:0}

],
                isLoadingCourses: true,
                selectedCourse: null,
                error: null
            });
    
		case MyReportActions.SEARCH_COMPLETE:
			 console.log("report complete==");
			
			// const myReportModel2 = action.payload;
           //  return action.payload;
		   //return Array.prototype.concat(action.payload);
		   return Object.assign({}, state, {
                reports: action.payload,
                isLoadingCourses: false,
                selectedCourse: null,
                error: null
            });
			 
		case MyReportActions.SEARCH_COMPLETE2:
			 console.log("report complete2==================");
			
			// const myReportModel2 = action.payload;
             return Object.assign({}, state, {
                reports: action.payload,
                isLoadingCourses: false,
                selectedCourse: null,
                error: null
            });

        default:
            return state;
    }
}

/*************************
 * SELECTORS
 ************************/

 //export const getEntities = (state: AppState) => state.myReportModel;



export const getCourses = (state: CourseState) => state.reports;
export const getIsLoading = (state: CourseState) => state.isLoadingCourses;





