import {Component, Inject, OnInit,ViewChild, ComponentFactoryResolver} from '@angular/core';

//import {TranslateService} from '@ngx-translate/core';
import * as states from './../ngrx/reducers';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
// NgRx
import {Store} from '@ngrx/store';
//import {AppState} from '../app.state';
//import {GetAllHeroes} from './store/heroes.actions';
import * as myReportActions from './store/myReport.actions';
import * as fromRoot from './store/myReport.reducer';
import { MyReportModel } from './shared/myReport.model';
import {IdentityComponent} from './identity/identity.component';
import {CertificationComponent} from './certification/certification.component';
import { AdDirective } from './ad.directive';

@Component({
	 selector: 'app-report-reader',
  styleUrls: ['./report-reader.component.scss'],

	 templateUrl: './report-reader.component.html'
	
 
})
export class ReportReaderComponent /*implements OnInit */{
  // HelloComponent is component.
 /* openTab = IdentityComponent;  
  num:string="hi";

  switchCertification(){
    this.openTab = CertificationComponent;
  }
  switchIdentity(){
    this.openTab = IdentityComponent;
  }
*/
 @ViewChild(AdDirective) adHost: AdDirective;

  public components = [IdentityComponent, CertificationComponent];
  public currentComponent = null;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public renderIdentity(): void {
    
    const currentComponent = this.components[0];
    
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentComponent as any);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }
  
   public renderCertification(): void {
    
    const currentComponent = this.components[1];
    
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(currentComponent as any);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
  }
}