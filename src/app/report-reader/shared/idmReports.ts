import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http,
    ConnectionBackend,
    RequestOptions,
    RequestOptionsArgs,
	ResponseContentType,
    Response,
    Headers} from '@angular/http';
	
	import {ConfigService} from '../../core/services/config.service';
//import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MyReportModel } from './myReport.model';

@Injectable()
export class GoogleBooksService {  
  

  constructor(private http: Http, private config: ConfigService) {
  
  
	console.log("google_books_Service_constructor_called");
	console.log("config:"+JSON.stringify(this.config));
	console.log("url_1:"+this.config.service);
	
	
	}

getCustomApplications(): Observable<MyReportModel[]> {	
	return this.http.get(this.config.service.rootUrl+"/myOAuthAPI/test2",this.requestOptions())
	.map(res => res.json());
  }

searchFood(query: MyReportModel): Observable<MyReportModel[]> {
   
console.log("search food called");
console.log("query object:"+query.name);
let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json'); 
myHeaders.append('Accept', 'application/json'); 
myHeaders.append('Access-Control-Allow-Origin', '*');
 myHeaders.append('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, PUT, OPTIONS');
 myHeaders.append('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
myHeaders.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

let myParams = new URLSearchParams();
var json = JSON.stringify(query);
//myParams.append('name', json); 
console.log("string json"+json);

let options = new RequestOptions({ headers: myHeaders, params: myParams }); 
options.withCredentials=false;
options.responseType = ResponseContentType.Json;
//getByIdentity
    return this.http.post('http://localhost:8080/jaxCustomRestApi2/rest/identities/getByIdentity',json,options)
      .map(res => res.json());
  }
  retrieveBook(volumeId: string): Observable<MyReportModel> {
	  console.log("retrieve Books");
    return this.http.get(this.config.service.rootUrl+"test")
      .map(res => res.json());
  }
   private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
			options.withCredentials=false;
        }
		var temp=  localStorage.getItem("token");
		console.log("temp:"+temp);
        if (options.headers == null) {
		console.log("headers were null");
            options.headers = new Headers();
			options.headers.append('Content-Type', 'application/json');
			options.headers.append('Accept', 'application/json');
			options.headers.append('Authorization', 'Bearer '+temp);
        }
        return options;
    }
}