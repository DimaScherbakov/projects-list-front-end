import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projects-list-front-end';
<<<<<<< HEAD

  constructor(){ }

=======
needProjects:boolean;
  constructor(){ }
    onChanged(d:any){
        this.needProjects=d;
    }
>>>>>>> aec24e330f0b504ac87fd2191377834a55360553
}
