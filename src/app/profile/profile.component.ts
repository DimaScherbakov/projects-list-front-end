import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../user-name.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
name:string;
  constructor(private userNameServ: UserNameService) { }

  ngOnInit() {
    this.userNameServ.change.subscribe( name => {
      this.name = name;
});	
  }

}
