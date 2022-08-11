import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContractService } from '../contract.service';
import { Staff, Welcome10 } from '../_model/ActivityStaff';
import { AStatus, Welcome1 } from '../_model/ActivityStatus';
import { ContractCustomer, Welcome6 } from '../_model/ContractCustomerList';
import { ContractStyle, Welcome4 } from '../_model/ContractStyleList';
import { Style } from '../_model/Style';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData: any;
  contractCustomer: ContractCustomer[] = [];
  contractStyles: ContractStyle[] = [];
  staff: Staff[] = [];
  aStatus: AStatus[] = [];
  form: FormGroup;
  style: Style[] = [];
  constructor(private contracts: ContractService) {
    this.form = new FormGroup({
      contractNo: new FormControl(''),
      customer: new FormControl(''),
      Address: new FormControl(''),
      Line: new FormControl(''),
      Bulk_Qty1: new FormControl(''),
      Bulk_Disc1: new FormControl(''),
      Bulk_Qty2: new FormControl(''),
      Bulk_Disc2: new FormControl(''),
      Bulk_Qty3: new FormControl(''),
      Bulk_Disc3: new FormControl(''),
      Bulk_Qty4: new FormControl(''),
      Bulk_Disc4: new FormControl(''),
      Tolerance: new FormControl(''),
      Bulk_Apply: new FormControl(''),
      Style: new FormControl(''),
      Sales_Price: new FormControl(''),
      UpliftApply: new FormControl(''),
      Status: new FormControl(''),
      Date_From: new FormControl(''),
      Date_To: new FormControl(''),
      Notes: new FormControl(''),
      contractLineDetails: new FormArray([
        new FormGroup({
          Style: new FormControl(''),
          Colour: new FormControl(''),
          Fitting: new FormControl(''),
          Size: new FormControl(''),
          Sales_Price: new FormControl('')
        })]),
      Name: new FormControl('',[Validators.required]),
      Email: new FormControl(''),
      SentBy: new FormControl(''),
      Comments: new FormControl(''),
      CustomerB2BStyle: new FormControl('')
    });

    console.log(this.form);

    this.contracts.ContractCustomerList().subscribe(data => {
      this.contractCustomer = data.contractCustomer;
    })

    this.contracts.ActivityStaff().subscribe(data => {
      this.staff = data.Staff;
    })

    this.contracts.ActivityStatus().subscribe(data => {
      this.aStatus = data.AStatus;
    })
  }

  ngOnInit(): void {
    this.form = new FormGroup({

    });

  }

  ContractStyleList(e: any) {
    this.contracts.ContractStyleList(e.target.value, "", 0, "").subscribe(data => {
      this.contractStyles = data.contractStyles;
    })
  }

  submit() {
    let form = {
      "Style": "",
      "Colour": "",
      "Fitting": "",
      "Size": "",
      "Sales_Price": 0.00
    };
    console.log(this.form.value);
    this.contracts.SaveData(this.form).subscribe(data=>{
      console.log(data);
    })
  }
 
}
