import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class EmpReimbursementService {

  constructor(private router: Router, private httpClient: HttpClient) { }

  public getEmployeeReimbursements() {
    return this.httpClient.post('http://localhost:8082/TRMS/get-reimbursements',
      {
        requesterID: parseInt(sessionStorage.getItem('employeeID')),
        employeeType: sessionStorage.getItem('employeeType')
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  public getEmployeeReimbursementById(reimbursementId: number): Observable<any> {
    return this.httpClient.post('http://localhost:8082/TRMS/get-reimbursement',
      {
        reimbursementID: reimbursementId
      }
    );
  }

  public approveReimbursement(requesterId: number, reimbursementId: number) {
    if(sessionStorage.getItem('employeeType') !== 'Employee') {
      this.httpClient.post('http://localhost:8082/TRMS/approve-reimbursement',
        {
          'reimbursementId': reimbursementId,
          'requesterId': requesterId,
          'approverId' : parseInt(sessionStorage.getItem('employeeID')),
          'approverEmployeeType' : sessionStorage.getItem('employeeType')
        },
        {
          headers: {
            'Content-Type' : 'application/json'
          }
        }
      ).subscribe(response => {
        this.router.navigateByUrl('emp-reimbursement-view');
      });
    }
  }

  public disapproveReimbursement(requesterId: number, reimbursementId:number) {
    if(sessionStorage.getItem('employeeType') !== 'Employee') {
      this.httpClient.post('http://localhost:8082/TRMS/disapprove-reimbursement',
        {
          'reimbursementId' : reimbursementId,
          'disapproverEmployeeType' : sessionStorage.getItem('employeeType')
        }
      ).subscribe(response => {
        this.router.navigateByUrl('emp-reimbursement-view');
      });
    }
  }
}
