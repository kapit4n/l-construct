import { Component, OnInit } from '@angular/core';
import { ContractorsService, Contractor } from '../../services/contractors.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contractor-add',
  templateUrl: './contractor-add.component.html',
  styleUrls: ['./contractor-add.component.scss']
})
export class ContractorAddComponent implements OnInit {

  data: Contractor = {} as Contractor;
  constructor(private contractorsSvc: ContractorsService, 
    private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

  save() {
    console.log(this.data);
    this.router.navigate(["/contractors"]);
  }

  
  cancel() {
    this.router.navigate(["/contractors"]);
  }

}
