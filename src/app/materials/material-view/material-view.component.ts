import { Component, OnInit } from '@angular/core';
import { MaterialsService, Material } from '../../services/materials.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.scss']
})
export class MaterialViewComponent implements OnInit {

  id: number;
  data: Material = {} as Material;
  constructor(private materialsSvc: MaterialsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.materialsSvc.getMaterials().subscribe(materials => {
        this.data = materials.find(x => x.id == this.id);
      })
    })
  }

}
