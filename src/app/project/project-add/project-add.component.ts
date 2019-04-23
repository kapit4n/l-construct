import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent implements OnInit {

  data: Project = {} as Project;
  constructor(private projectsSvc: ProjectsService, 
    private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

  save() {
    console.log(this.data);
    this.router.navigate(["/projects"]);
  }

  
  cancel() {
    this.router.navigate(["/projects"]);
  }

}
