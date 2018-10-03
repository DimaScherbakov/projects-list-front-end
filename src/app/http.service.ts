import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }
    getData(){
	console.log("get request run");
	        const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token'),;		
        return this.http.get('http://127.0.0.1:8080/login').subscribe(function(item:any){
        console.log(item);
        }); 
    }
}
