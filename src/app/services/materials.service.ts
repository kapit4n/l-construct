import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export  interface Material {
  id: number;
  name: string;
  description: string;
  img: string;
  category: string;
  cost: number;
  unitCost: string;
}

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  materialsUrl = '../assets/materials.json';

  constructor(private http: HttpClient) { }

  getMaterials(): Observable<Material[]> {
    return this.http.get(this.materialsUrl) as Observable<Material[]>;
  }

}