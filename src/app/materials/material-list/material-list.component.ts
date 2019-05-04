import { Component, OnInit } from '@angular/core';
import { MaterialsService, Material } from '../../services/materials.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
  materials: Material[];

  constructor(private materialsSvc: MaterialsService) { }

  ngOnInit() {
    this.materialsSvc.getMaterials().subscribe(data => {
      this.materials = data;
    })
  }

}
