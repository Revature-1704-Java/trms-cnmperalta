import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EmpReimbursementService } from './emp-reimbursement.service';

@Injectable()
export class LoginService {
  private loggedIn = new  BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private router: Router) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public doLogin(email: string, password: string): Observable<any> {
    let loginObs = this.httpClient.post('http://localhost:8082/TRMS/login',
      {
        'emailAddress': email,
        'password': password
      },
      {
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    );
    loginObs.subscribe(response => {
      sessionStorage.setItem('employeeID', String(response['employeeId']));
      sessionStorage.setItem('directSupervisorID', String(response['directSupervisorId']));
      sessionStorage.setItem('departmentHeadID', String(response['departmentHeadId']));
      sessionStorage.setItem('employeeType', String(response['employeeType']));
      if(response['lastLogin'] != null) {
        sessionStorage.setItem('loggedIn', 'true');
        this.loggedIn.next(true);
      }
    });

    return loginObs;
  }

  public doLogout(): void {
    sessionStorage.clear();
    this.loggedIn.next(false);
    this.router.navigateByUrl('/login');
  }
}
