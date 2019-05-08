import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export  interface ComponentTmpl {
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
export class ComponentsService {

  componentsUrl = '../assets/components.json';

  constructor(private http: HttpClient) { }

  getComponents(): Observable<ComponentTmpl[]> {
    return this.http.get(this.componentsUrl) as Observable<ComponentTmpl[]>;
  }

}
