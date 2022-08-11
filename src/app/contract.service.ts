import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { Welcome10 } from './_model/ActivityStaff';
import { Welcome1 } from './_model/ActivityStatus';
import { Welcome6 } from './_model/ContractCustomerList';
import { Welcome4 } from './_model/ContractStyleList';
import { Welcome3 } from './_model/CustomerAddressList';
import { User } from './_model/user';

const  apiUrl = 'http://adentrn.worksafeonline.co.uk/';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(private http: HttpClient) { 
     
  }

  ContractCustomerList() {
    return this.http.get<any>(`${apiUrl}api/ContractCustomerList`)
        .pipe(map(welcome6 => {
            return welcome6;
        }));
  }

  CustomerAddressList(customer:string) {
    return this.http.get<any>(`${apiUrl}api/CustomerAddressList?Customer=${customer}`)
        .pipe(map(welcome3 => {
            return welcome3;
        }));
  }

  ContractStyleList(Customer:string,Address:string,ContractNo:number,Style:string) {
    return this.http.get<any>(`${apiUrl}api/ContractStyleList?Customer=${Customer}&Address=${Address}&ContractNo=${ContractNo}&Style=${Style}`)
        .pipe(map(welcome4 => {
            return welcome4;
        }));
  }

  ActivityStaff() {
    return this.http.get<any>(`${apiUrl}api/ActivityStaff`)
        .pipe(map(welcome4 => {
            return welcome4;
        }));
  }

  ActivityStatus() {
    return this.http.get<any>(`${apiUrl}api/ActivityStatus`)
        .pipe(map(welcome1 => {
            return welcome1;
        }));
  }

  SaveData(ContractStyle:any) {
    return this.http.post<any>(`${apiUrl}api/SaveContractStyle`, ContractStyle)
        .pipe(map(welcome1 => {
            return welcome1;
        }));
  }
}
