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
  form;
  style: Style[] = [];
  constructor(private contracts: ContractService, private fb:FormBuilder) {
    this.form = fb.group({
      Customer: [''],
      Name: [''],
      ContractNo: [''],
      Address: [''],
      Line: [''],
      Bulk_Qty1: [''],
      Bulk_Disc1: [''],
      Bulk_Qty2: [''],
      Bulk_Disc2: [''],
      Bulk_Qty3: [''],
      Bulk_Disc3: [''],
      Bulk_Qty4: [''],
      Bulk_Disc4: [''],
      Tolerance: [''],
      Bulk_Apply: [''],
      Style: [''],
      Sales_Price: [''],
      UpliftApply: [''],
      Status: [''],
      Date_From: [''],
      Date_To: [''],
      Notes: [''],
      contractLineDetails: fb.group({
          Style: [''],
          Colour: [''],
          Fitting: [''],
          Size: [''],
          Sales_Price: ['0.00']
        }),
      Email: [''],
      SentBy: [''],
      Comments: [''],
      CustomerB2BStyle: ['']
    });


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

  get Customer() {
    return this.form.get('customer');
  }
  get Name() {
    return this.form.get('name');
  }
  get ContractNo() {
    return this.form.get('contractNo');
  }
  get Address() {
    return this.form.get('Address');
  }
  get Line() {
    return this.form.get('Line');
  }
  get Bulk_Qty1() {
    return this.form.get('Bulk_Qty1');
  }
  get Bulk_Disc1() {
    return this.form.get('Bulk_Disc1');
  }
  get Bulk_Qty2() {
    return this.form.get('Bulk_Qty2');
  }
  get Bulk_Disc2() {
    return this.form.get('Bulk_Disc2');
  }
  get Bulk_Qty3() {
    return this.form.get('Bulk_Qty3');
  }
  get Bulk_Disc3() {
    return this.form.get('Bulk_Disc3');
  }
  get Bulk_Qty4() {
    return this.form.get('Bulk_Qty4');
  }
  get Bulk_Disc4() {
    return this.form.get('Bulk_Disc4');
  }
  get Tolerance() {
    return this.form.get('Tolerance');
  }
  get Bulk_Apply() {
    return this.form.get('Bulk_Apply');
  }
  get Style() {
    return this.form.get('Style');
  }
  get Sales_Price() {
    return this.form.get('Sales_Price');
  }
  get UpliftApply() {
    return this.form.get('UpliftApply');
  }
  get Status() {
    return this.form.get('Status');
  }
  get Date_From() {
    return this.form.get('Date_From');
  }
  get Date_To() {
    return this.form.get('Date_To');
  }
  get Notes() {
    return this.form.get('Notes');
  }
  get SentBy() {
    return this.form.get('SentBy');
  }
  get Comments() {
    return this.form.get('Comments');
  }
  get CustomerB2BStyle() {
    return this.form.get('CustomerB2BStyle');
  }
  get Email() {
    return this.form.get('Email');
  }

  // get Sales_Price() {
  //   return this.form.get('contractLineDetails').get('Sales_Price_A');
  // }

  // get Colour() {
  //   return this.form.get('contractLineDetails').get('pincode');
  // }

  // get Fitting() {
  //   return this.form.get('contractLineDetails').get('pincode');
  // }

  // get Size() {
  //   return this.form.get('contractLineDetails').get('pincode');
  // }
  // get Style() {
  //   return this.form.get('contractLineDetails').get('pincode');
  // }

  ngOnInit(): void {

  }

  ContractStyleList(e: any) {
    this.contracts.ContractStyleList(e.target.value, "", 0, "").subscribe(data => {
      this.contractStyles = data.contractStyles;
    })
  }

  submit() {
    // let form = {
    //   "Style": "",
    //   "Colour": "",
    //   "Fitting": "",
    //   "Size": "",
    //   "Sales_Price": 0.00
    // };

    console.log(this.form.value);
    this.contracts.SaveData(this.form.value).subscribe(data=>{
      console.log(data);
    })
  }
 
}
