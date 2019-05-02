import { Component, OnInit } from '@angular/core';
import { ContractorsService, Contractor } from '../../services/contractors.service';

@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
  styleUrls: ['./contractor-list.component.scss']
})
export class ContractorListComponent implements OnInit {
  contractors: Contractor[];

  constructor(private contractorsSvc: ContractorsService) {
  }

  ngOnInit() {
    this.contractorsSvc.getContractors().subscribe(data => {
      this.contractors = data;
    })
  }

}
