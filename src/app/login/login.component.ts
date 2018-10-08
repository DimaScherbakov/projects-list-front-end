import { Component, OnInit } from '@angular/core';
import { User } from '../user-model'
import {HttpService} from '../http.service'
//import {NgForm} from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService]

})
export class LoginComponent implements OnInit {
user: User=new User();
name: string;
isDone: boolean = false;
projectsURL: boolean = true;

  constructor(private httpService: HttpService) { }
  ngOnInit() { }

  setProjectsURL(){
	this.projectsURL= this.projectsURL == true ? false : true;
	console.log("this.projectsURL: "+this.projectsURL);
}

  submit(user:User){
        this.httpService.postLogin(user)
                .subscribe(
                    (data: any) => {console.log("data");this.name=data.name;this.isDone=true;},
                    error => console.log(error)
                );
}

}
