import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];

  constructor(private projectsSvc: ProjectsService) {
  }

  ngOnInit() {
    this.projectsSvc.getProjects().subscribe(data => {
      this.projects = data;
    })
  }

}
