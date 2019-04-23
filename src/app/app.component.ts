import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from './services/projects.service';
import { NbAuthService } from '@nebular/auth';
import { NbMenuItem } from '@nebular/theme';
import { homedir } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'l-construct';
  projects: Project[];
  isAuthenticated = false;
  menuItems: NbMenuItem[] = [
    {
      title: "home",
      link: '/'
    },
    {
      title: "projects",
      link: '/projects'
    },
    {
      title: 'materials',
      link: '/materials'
    },
    {
      title: 'Logout',
      link: '/logout'
    }
  ]
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
