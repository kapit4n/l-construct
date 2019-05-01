import { Component, OnInit } from '@angular/core';
import { MaterialsService, Material } from '../../services/materials.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-material-add',
  templateUrl: './material-add.component.html',
  styleUrls: ['./material-add.component.scss']
})
export class MaterialAddComponent implements OnInit {

  data: Material = {} as Material;
  constructor(private materialsSvc: MaterialsService, 
    private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  save() {
    console.log(this.data);
    this.router.navigate(["/materials"]);
  }

  
  cancel() {
    this.router.navigate(["/materials"]);
  }

}
