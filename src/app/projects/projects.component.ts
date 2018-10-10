import { Component, OnInit,Input,DoCheck } from '@angular/core';
//import { PROJECTS } from '../a-few-projects';
import {Project} from '../project-model';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [HttpService]
})
export class ProjectsComponent implements OnInit {
projects:any;
selectedProj: Project;
@Input() needProjects:boolean;
oldNeedProjects:boolean=false;
  constructor(private httpService: HttpService){}

  ngOnInit() {
  //this.httpService.getProjects().subscribe((data: any) => {console.log("!!!!!!!!!!!!!!!!");this.projects=data;console.log(this.projects);},
                    //error => console.log(error));
 }

  onSelected(project: Project):void{
this.selectedProj = project;
 }
ngDoCheck(){
if(this.oldNeedProjects!=this.needProjects && this.needProjects!=undefined){
	this.oldNeedProjects=!(this.oldNeedProjects);
	this.httpService.getProjects().subscribe((data: any) => {this.projects=data;console.log(this.projects);},
                  error => console.log(error));
}
}
}
