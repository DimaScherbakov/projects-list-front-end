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
 answer:any; // array that with answer from server
  constructor(private httpService: HttpService){
  this.httpService.getData().subscribe((data: any) => {this.answer=data;},
                    error => console.log(error));
  }
}
