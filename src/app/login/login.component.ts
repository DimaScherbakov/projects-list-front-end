import { Component, OnInit } from '@angular/core';
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
  constructor(private httpService: HttpService) { }
  ngOnInit() {
  }
  submit(user:User){
        this.httpService.postLogin(user)
                .subscribe(
                    (data: any) => {console.log("data");this.name=data.name;this.isDone=true;},
                    error => console.log(error)
                );
}
}
