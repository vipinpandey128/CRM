import { Component, OnInit } from '@angular/core';
import { ContractService } from '../contract.service';
import { Welcome10 } from '../_model/ActivityStaff';
import { Welcome1 } from '../_model/ActivityStatus';
import { Welcome6 } from '../_model/ContractCustomerList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData:any;
  welcome6:Welcome6 | any;
  welcome10:Welcome10 | any;
  welcome1:Welcome1 | any;
  constructor(private contracts: ContractService) {
    this.userData = localStorage.getItem('currentUser');
   }

  ngOnInit(): void {
    this.contracts.ContractCustomerList().subscribe(data=>{
      console.log("print");
      this.welcome6 = data;
      console.log(this.welcome6.contractCustomer);
    })

    this.contracts.ActivityStaff().subscribe(data=>{
      this.welcome10 = data;
    })

    this.contracts.ActivityStatus().subscribe(data=>{
      this.welcome1 = data;
    })

  }

  ContractStyleList(event:Event)
  {
    console.log(event);
  }

}
