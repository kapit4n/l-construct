import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  id: number;
  data: Project = {} as Project;
  constructor(private projectsSvc: ProjectsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.projectsSvc.getProjects().subscribe(projects => {
        this.data = projects.find(x => x.id == this.id);
      })
    })
  }

}
