import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from './services/projects.service';
import { NbAuthService } from '@nebular/auth';
import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';

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
      title: "Projects",
      link: '/projects'
    },
    {
      title: 'Materials',
      link: '/materials'
    },
    {
      title: 'Contractors',
      link: '/contractors'
    },
    {
      title: 'Contracts',
      link: '/contracts'
    },
    {
      title: 'Equipments',
      link: '/equipments'
    },
    {
      title: 'Estimations',
      link: '/estimations'
    },
    {
      title: 'Logout',
      link: '/logout'
    }
  ]
  constructor(private projectsSvc: ProjectsService,
              private authSvc: NbAuthService, 
              private sidebarService: NbSidebarService) {
  }

  ngOnInit() {
    this.authSvc.isAuthenticated().subscribe(data => {
      this.isAuthenticated = data;
    });
    
    this.authSvc.onAuthenticationChange().subscribe(data => {
      this.isAuthenticated = data;
    })
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
