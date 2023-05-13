import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { CONFIG } from "../app-config";
import { AppCommonModule } from "./common/app-common.module";
import {ReportReaderModule} from './report-reader/report-reader.module';
import { reducer } from "app/ngrx/reducers";
//https://github.com/opfab/operatorfabric-core/tree/929dd8d0485e4e3f2cf68f7f07477cbe76f8acfc/ui/main/src/app
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ,CoreModule.forRoot(CONFIG)
	, AppCommonModule
	,ReportReaderModule,
  //  AppRoutingModule,
	StoreModule.provideStore(reducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
