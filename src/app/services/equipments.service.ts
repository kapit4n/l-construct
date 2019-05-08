import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export  interface Equipment {
  id: number;
  name: string;
  img: string;
  cost: number;
  unitCost: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {

  equipmentsUrl = '../assets/equipments.json';

  constructor(private http: HttpClient) { }

  getEquipments(): Observable<Equipment[]> {
    return this.http.get(this.equipmentsUrl) as Observable<Equipment[]>;
  }

}
