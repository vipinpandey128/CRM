import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './_model/user';
import { environment } from 'src/environments/environment';

const  apiUrl = 'http://adentrn.worksafeonline.co.uk/';
@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject!: BehaviorSubject<User>;
    public user!: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(formdata:any) {
        console.log(apiUrl+"api/Token");
        return this.http.post<User>(`${apiUrl}api/Token`, formdata)
            .pipe(map(user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                return user;
            }));
    }
 
}