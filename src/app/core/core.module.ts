import {APP_INITIALIZER,NgModule, ModuleWithProviders,Optional, SkipSelf, ErrorHandler,Injectable,Inject} from '@angular/core';
import {OAuth2Service} from './services/oauth2.service';
import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { ConfigService } from "./services/config.service";
import { IHttpConfig } from "./models/http-config.interface";
import { CommonModule } from '@angular/common';
import { propertiesResolverFactory } from "./properties-resolver.factory";
import { StorageService } from "./services/storage.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthInterceptor } from "./interceptors/auth-interceptor";
import {NavComponent} from './nav/nav.component';
@NgModule({
  imports: [
   // SharedModule
   CommonModule,
   HttpClientModule
  ],
  exports: [    
  //  ReportReaderComponent,
	 //NavComponent
     NavComponent
  ],
  declarations: [
    
    //ReportReaderComponent,
	// NavComponent
	 NavComponent
    
  ],
  //providers: [
   //   OAuth2Service
	 //,{provide: 'AuthService', useFactory: null, deps: [HttpClient]}
  //]
})

export class CoreModule {
  public static forRoot(config?: IHttpConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule
     ,providers: [
	 HttpClientModule,
	  StorageService,
     //   AuthGuardService,
	//   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      OAuth2Service
	 //,{provide: 'AuthService', useFactory: null, deps: [HttpClient]}
	, HttpClientModule,
	  ConfigService,
        {provide: 'CONFIG', useValue: config}
	,	
	  {
          provide: APP_INITIALIZER,
          useFactory: propertiesResolverFactory,
          deps: [ ConfigService,OAuth2Service, [new Inject('CONFIG')]],

          multi: true
        }

  ]
    };
  }
}