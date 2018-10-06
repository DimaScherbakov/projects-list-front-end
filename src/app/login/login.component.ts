		import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { User } from '../user-model'
import {HttpService} from '../http.service'
//import {NgForm} from '@angular/forms';

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
@Output() public loginNeedProjects= new EventEmitter<boolean>();

  constructor(private httpService: HttpService) { }
  ngOnInit() {
  }
  submit(user:User){
        this.httpService.postLogin(user)
                .subscribe(
                    (data: any) => {this.name=data.name;
				this.change(this.isDone);
				this.isDone = !(this.isDone);},
                    error => console.log(error)
                );
	
	//this.change(this.isDone);
	//this.isDone = !(this.isDone);	
}
   @Output() onChanged = new EventEmitter<boolean>();
    change(data:any) {
        this.onChanged.emit(data);
    }
}
