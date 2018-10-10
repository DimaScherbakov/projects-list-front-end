import { Component, OnInit } from '@angular/core';
import { User } from '../user-model'
import {HttpService} from '../http.service'
//import {NgForm} from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { UserNameService } from '../user-name.service';

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

  constructor(private httpService: HttpService,private userNameServ: UserNameService) { }
  ngOnInit() { }

  setProjectsURL(){
	this.projectsURL= this.projectsURL == true ? false : true;
	//console.log("this.projectsURL: "+this.projectsURL);
}

  submit(user:User){
        this.httpService.postLogin(user)
                .subscribe(
                    (data: any) => {this.name=data.name;
				    this.isDone=true;
				    this.userNameServ.setName(data.name);
				   },
                    error => console.log(error)
                );
}

registrate(user:User){
this.httpService.postUser(user)
.subscribe((data:any) => {
	        this.httpService.postLogin(user)
                .subscribe(
                    (data: any) => {this.name=data.name;
                                    this.isDone=true;
                                    this.userNameServ.setName(data.name);
                                   },
                    error => console.log(error)
                );

},
 error => console.log(error)
);
}

}
