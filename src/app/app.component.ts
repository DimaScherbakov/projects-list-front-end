import { Component } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  title = 'projects-list-front-end';
  constructor(private httpService: HttpService){
  var resp = httpService.getData();
  //for (var item in resp){console.log(resp[item])}
  //console.log(resp);
  }
}
