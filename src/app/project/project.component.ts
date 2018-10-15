import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project-model';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

@Input() projInfo: Project;
//condition: boolean = true;
//condition:boolean = projInfo.update;
  constructor() { }

  ngOnInit() {
  }

}
