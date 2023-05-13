// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { MyReportModel } from './../shared/myReport.model'

// Section 2
export const GET_MY_REPORT_POST       = '[MY_REPORT] POST'
export const GET_MY_REPORT       = '[MY_REPORT] GET'
export const SEARCH_COMPLETE =  '[MY_REPORT] Search Complete';
export const SEARCH_COMPLETE2 =  '[MY_REPORT] Search Complete2';
//export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

// Section 3
export class GetMyReport implements Action {
    readonly type = GET_MY_REPORT

    constructor() {}
}
export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: MyReportModel[]) { }
}

export class GetMyReportPost implements Action {
  readonly type = GET_MY_REPORT_POST;

  constructor(public payload: MyReportModel) { }
}
export class SearchCompleteAction2 implements Action {
  readonly type = SEARCH_COMPLETE2;

  constructor(public payload: MyReportModel[]) { }
}


// Section 4
export type Actions = GetMyReport|SearchCompleteAction|GetMyReportPost|SearchCompleteAction2
