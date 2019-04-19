import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export  interface Project {
  id: number;
  name: string;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectsUrl = '../assets/projects.json';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get(this.projectsUrl) as Observable<Project[]>;
  }

}
