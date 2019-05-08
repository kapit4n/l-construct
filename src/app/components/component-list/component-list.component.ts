import { Component, OnInit } from '@angular/core';
import { ComponentsService, ComponentTmpl } from 'src/app/services/components.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss']
})
export class ComponentListComponent implements OnInit {

  components: ComponentTmpl[];

  constructor(private componentsSvc: ComponentsService) {
  }

  ngOnInit() {
    this.componentsSvc.getComponents().subscribe(data => {
      this.components = data;
    })
  }

}