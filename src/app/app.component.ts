import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from './services/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'l-construct';
  projects: Project[];

  constructor(private projectsSvc: ProjectsService) {
  }

  ngOnInit() {
    this.projectsSvc.getProjects().subscribe(data => {
      this.projects = data;
    })
  }
}
