import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  id: number;
  data: Project = {} as Project;
  constructor(private projectsSvc: ProjectsService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.projectsSvc.getProjects().subscribe(projects => {
        this.data = projects.find(x => x.id == this.id);
      })
    })
  }

  save() {
    console.log(this.data);
    this.router.navigate(["/projects/view/" + this.id]);
  }

  
  cancel() {
    this.router.navigate(["/projects/view/" + this.id]);
  }


}
