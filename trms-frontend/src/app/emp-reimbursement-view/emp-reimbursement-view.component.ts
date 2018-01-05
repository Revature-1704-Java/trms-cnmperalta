import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';
import { EmpReimbursementService } from '../shared/emp-reimbursement.service';

@Component({
  selector: 'app-emp-reimbursement-view',
  templateUrl: './emp-reimbursement-view.component.html',
  styleUrls: ['./emp-reimbursement-view.component.css']
})
export class EmpReimbursementViewComponent implements OnInit {
  private empReimbursements;

  constructor(private empReimService: EmpReimbursementService, private router: Router) { }
  
  ngOnInit() {
    if(sessionStorage.getItem('loggedIn') === null || sessionStorage.getItem('loggedIn') === 'false')
      this.router.navigateByUrl('login');
    this.empReimService.getEmployeeReimbursements().subscribe(empReim => {
      this.empReimbursements = empReim;
    });
  }
}
