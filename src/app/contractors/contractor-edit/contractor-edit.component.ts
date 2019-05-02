import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractorsService, Contractor } from '../../services/contractors.service';

@Component({
  selector: 'app-contractor-edit',
  templateUrl: './contractor-edit.component.html',
  styleUrls: ['./contractor-edit.component.scss']
})
export class ContractorEditComponent implements OnInit {

  id: number;
  data: Contractor = {} as Contractor;
  constructor(private contractorsSvc: ContractorsService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.contractorsSvc.getContractors().subscribe(contractors => {
        this.data = contractors.find(x => x.id == this.id);
      })
    })
  }

  save() {
    console.log(this.data);
    this.router.navigate(["/contractors/view/" + this.id]);
  }

  
  cancel() {
    this.router.navigate(["/contractors/view/" + this.id]);
  }


}

