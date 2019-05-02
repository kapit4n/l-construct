import { Component, OnInit } from '@angular/core';
import { EquipmentsService, Equipment } from 'src/app/services/equipments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipment-view',
  templateUrl: './equipment-view.component.html',
  styleUrls: ['./equipment-view.component.scss']
})
export class EquipmentViewComponent implements OnInit {

  id: number;
  data: Equipment = {} as Equipment;
  constructor(private equipmentsSvc: EquipmentsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.equipmentsSvc.getEquipments().subscribe(equipments => {
        this.data = equipments.find(x => x.id == this.id);
      })
    })
  }

}
