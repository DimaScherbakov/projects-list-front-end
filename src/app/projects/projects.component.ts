import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../a-few-projects';
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

  constructor(private httpService: HttpService){
  this.httpService.getProjects().subscribe((data: any) => {this.projects=data;console.log(this.projects);},
                    error => console.log(error));
 }

  ngOnInit() { }

  onSelected(project: Project):void{
this.selectedProj = project;
 }
}
