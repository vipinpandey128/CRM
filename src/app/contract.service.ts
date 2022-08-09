import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Welcome10 } from './_model/ActivityStaff';
import { Welcome1 } from './_model/ActivityStatus';
import { Welcome6 } from './_model/ContractCustomerList';
import { Welcome4 } from './_model/ContractStyleList';
import { Welcome3 } from './_model/CustomerAddressList';
import { User } from './_model/user';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private http: HttpClient) { }

  ContractCustomerList() {
    return this.http.get<Welcome6>(`${environment.apiUrl}/api/ContractCustomerList`)
        .pipe(map(welcome6 => {
            return welcome6;
        }));
  }

  CustomerAddressList(customer:string) {
    return this.http.get<Welcome3>(`${environment.apiUrl}/api/CustomerAddressList?Customer=${customer}`)
        .pipe(map(welcome3 => {
            return welcome3;
        }));
  }

  ContractStyleList(Customer:string,Address:string,ContractNo:number,Style:string) {
    return this.http.get<Welcome4>(`${environment.apiUrl}/api/ContractStyleList?Customer=${Customer}&Address=${Address}&ContractNo=${ContractNo}&Style=${Style}`)
        .pipe(map(welcome4 => {
            return welcome4;
        }));
  }

  ActivityStaff() {
    return this.http.get<Welcome10>(`${environment.apiUrl}/api/ActivityStaff`)
        .pipe(map(welcome4 => {
            return welcome4;
        }));
  }

  ActivityStatus() {
    return this.http.get<Welcome1>(`${environment.apiUrl}/api/ActivityStatus`)
        .pipe(map(welcome1 => {
            return welcome1;
        }));
  }
}