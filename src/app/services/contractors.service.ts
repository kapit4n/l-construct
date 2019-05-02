import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export  interface Contractor {
  id: number;
  name: string;
  photo: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContractorsService {

  contractorsUrl = '../assets/contractors.json';

  constructor(private http: HttpClient) { }

  getContractors(): Observable<Contractor[]> {
    return this.http.get(this.contractorsUrl) as Observable<Contractor[]>;
  }

}
