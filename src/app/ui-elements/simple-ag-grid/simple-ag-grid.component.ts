import { Component, OnInit, Input,ChangeDetectionStrategy,OnChanges,SimpleChanges,ViewChild,ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { AgGridNg2 } from 'ag-grid-angular';
//https://github.com/stajics/poslovna_informatika/blob/d01ae4d4f2fc5e9b7703db2fa699eea3ee39308e/ng2GridReactive/app/ag-grid/ag-grid.component.ts#L6


@Component({
  selector: 'simple-ag-grid',
  templateUrl: './simple-ag-grid.component.html',
      changeDetection: ChangeDetectionStrategy.OnPush,

  styleUrls: ['./simple-ag-grid.component.css']
})
export class UIAgGridComponent implements OnInit,OnChanges {

  @Input() colHeadersObsrv: Observable<any[]>;
  @Input() rowDataObsrv: Observable<any[]>;
 // @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;
   @ViewChild('agGrid') agGrid: AgGridNg2;


  // private rowData = [];
  private columnDefs = [];
  private headerStrArr = [];

  private rowDataSub = new BehaviorSubject<any[]>(undefined);
  private colmnSub = new BehaviorSubject<any[]>(undefined);

  rowDataObs = this.rowDataSub.asObservable();
  colmnObs = this.colmnSub.asObservable();


  overlayNoRowsTemplate;

  constructor(
     private cd: ChangeDetectorRef) {  }


  ngOnInit() {
	    console.log("ngOnInit_called");
    this.setNoRowTxt();
	//this.colHeadersObsrv.subscribe(console.log);
	//this.rowDataObsrv.subscribe(console.log);
    this.colHeadersObsrv.subscribe(head => this.processHeaders(head));
	console.log("ngOnInit_finished");
  }

  onGridReady(params) {
	  console.log("Grid is Ready");
    this.rowDataObsrv.subscribe(rows => {
      const rowData = this.processRowData(rows);
    //  console.log('onGridReady ' + rowData[0]);
//rowData.subscribe(console.log);

      params.api.setRowData(rowData);

      if (rowData && rowData.length > 0) {
        console.log('hideOverlay ');
        params.api.hideOverlay();
      } else {
        console.log('showNoRowsOverlay ');
       // params.api.showNoRowsOverlay();
      }
    });
  }

  private processHeaders(heads) {
  console.log("process_headers_called");



 
    if (!heads) { return; }
		var testMe = Observable.of(heads);

		let counter =0;
		for (let i of heads ){
			
	  
	   if(counter ==0){
	     this.columnDefs.push({
        headerName: i
        , field: i
        , width: 100
			,checkboxSelection: true
		,headerCheckboxSelection: true
	   });}
	   else{
		    this.columnDefs.push({
        headerName: i
        , field: i
        , width: 100
		
	   });
	   }
	   counter+=1;
   }
   this.colmnSub.next(this.columnDefs);
	console.log("process_headers_finished");
	
  }

  private processRowData(rows: any[]): any[] {
  console.log("process_row_data_called");
    if (!rows || rows.length === 0) { return []; }

    const rowData = [];
    /*for (const d of rows) {
	console.log("arrived_data: "+JSON.stringify(d));
      const newData = {};
      this.headerStrArr.forEach(h => {
	  Object.defineProperty(newData, h, { value: d[h] }));
	  console.log("built_data: "+JSON.stringify(newData));
      rowData.push({"id":0});
    }*/
	 this.headerStrArr = [];
   // for (let key in rows) {
     // this.headerStrArr.push({ headerName: key, field: key });
    //}
	console.log("headerStrArr:"+JSON.stringify(this.headerStrArr));
   
	  console.log("process_row_data_finished");
    return rows;
  }
   ngOnChanges(changes: SimpleChanges) { 
   
   console.log("On changes");
   this.rowDataObsrv.subscribe(console.log);
    }

  private setNoRowTxt() {
    this.overlayNoRowsTemplate = `No Records were fetched. Please try again later.`;
  }
  onBtnExport(): void {
    const params = {
      columnGroups: true,
      allColumns: true,
	  onlySelected:true,
      fileName: 'filename_of_your_choice',
      //columnSeparator: document.querySelector("#columnSeparator")
    };
	const selectedNodes = this.agGrid.api.getSelectedNodes();
   console.log('selectedNodes', selectedNodes);
    
	this.agGrid.api.exportDataAsCsv(params);
}

}