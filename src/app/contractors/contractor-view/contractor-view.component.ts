import { Component, OnInit } from '@angular/core';
import { ContractorsService, Contractor } from '../../services/contractors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contractor-view',
  templateUrl: './contractor-view.component.html',
  styleUrls: ['./contractor-view.component.scss']
})
export class ContractorViewComponent implements OnInit {

  id: number;
  data: Contractor = {} as Contractor;
  constructor(private contractorsSvc: ContractorsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.contractorsSvc.getContractors().subscribe(contractors => {
        this.data = contractors.find(x => x.id == this.id);
      })
    })
  }

}