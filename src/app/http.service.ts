import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {User} from './user-model';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }
    getProjects(){
        return this.http.get('http://127.0.0.1:8080/list');
    }
    postLogin(user:User){
	const userInfo = {name: user.name, pass:user.pass}
	return this.http.post('http://127.0.0.1:8080/login',userInfo);
    }
    postUser(user:User){
        const userInfo = {name: user.name, pass:user.pass, cat:'auth'}
        return this.http.post('http://127.0.0.1:8080/registration',userInfo);
}
}
