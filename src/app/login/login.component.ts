		import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
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
<<<<<<< HEAD
projectsURL: boolean = true;

  constructor(private httpService: HttpService,private userNameServ: UserNameService) { }
  ngOnInit() { }

  setProjectsURL(){
	this.projectsURL= this.projectsURL == true ? false : true;
	//console.log("this.projectsURL: "+this.projectsURL);
}

=======
@Output() public loginNeedProjects= new EventEmitter<boolean>();

  constructor(private httpService: HttpService) { }
  ngOnInit() {
  }
>>>>>>> aec24e330f0b504ac87fd2191377834a55360553
  submit(user:User){
        this.httpService.postLogin(user)
                .subscribe(
                    (data: any) => {this.name=data.name;
<<<<<<< HEAD
				    this.isDone=true;
				    this.userNameServ.setName(data.name);
				   },
=======
				this.change(this.isDone);
				this.isDone = !(this.isDone);},
>>>>>>> aec24e330f0b504ac87fd2191377834a55360553
                    error => console.log(error)
                );
	
	//this.change(this.isDone);
	//this.isDone = !(this.isDone);	
}
<<<<<<< HEAD

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

=======
   @Output() onChanged = new EventEmitter<boolean>();
    change(data:any) {
        this.onChanged.emit(data);
    }
>>>>>>> aec24e330f0b504ac87fd2191377834a55360553
}
