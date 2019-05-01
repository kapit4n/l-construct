import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaterialsService, Material } from '../../services/materials.service';

@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.scss']
})
export class MaterialEditComponent implements OnInit {

  id: number;
  data: Material = {} as Material;
  constructor(private materialsSvc: MaterialsService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.materialsSvc.getMaterials().subscribe(materials => {
        this.data = materials.find(x => x.id == this.id);
      })
    })
  }

  save() {
    console.log(this.data);
    this.router.navigate(["/materials/view/" + this.id]);
  }

  
  cancel() {
    this.router.navigate(["/materials/view/" + this.id]);
  }


}
