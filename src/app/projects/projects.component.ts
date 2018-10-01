import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../a-few-projects';
import {Project} from '../project-model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
projects=PROJECTS;
selectedProj: Project;

  constructor() { }

  ngOnInit() {
  }
  onSelected(project: Project):void{
this.selectedProj = project;
}
}
