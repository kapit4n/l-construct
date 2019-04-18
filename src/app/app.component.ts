import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'l-construct';

  projects = [
    {
      id: 1,
      name: "project 1"
    },
    {
      id: 2,
      name: "project 2"
    },
  ] 
}
