import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from './services/projects.service';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'l-construct';
  projects: Project[];
  isAuthenticated = false;

  constructor(private projectsSvc: ProjectsService,
              private authSvc: NbAuthService) {
  }

  ngOnInit() {
    this.authSvc.isAuthenticated().subscribe(data => {
      this.isAuthenticated = data;
    });
    
    this.authSvc.onAuthenticationChange().subscribe(data => {
      this.isAuthenticated = data;
    })
  }
}
