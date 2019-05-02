import { Component, OnInit } from '@angular/core';
import { EquipmentsService, Equipment } from 'src/app/services/equipments.service';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {

  equipments: Equipment[];

  constructor(private equipmentsSvc: EquipmentsService) {
  }

  ngOnInit() {
    this.equipmentsSvc.getEquipments().subscribe(data => {
      this.equipments = data;
    })
  }

}
