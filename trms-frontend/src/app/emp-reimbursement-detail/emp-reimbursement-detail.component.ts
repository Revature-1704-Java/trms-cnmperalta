import { Component, OnInit } from '@angular/core';
import { EmpReimbursementService } from '../shared/emp-reimbursement.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-reimbursement-detail',
  templateUrl: './emp-reimbursement-detail.component.html',
  styleUrls: ['./emp-reimbursement-detail.component.css']
})
export class EmpReimbursementDetailComponent implements OnInit {
  public reimbursement;
  public showApproveDisapprove: boolean;

  constructor(private empReimbursementService: EmpReimbursementService, private route: ActivatedRoute) { }

  ngOnInit() {
    let rid: number = parseInt(this.route.snapshot.params['reimbursementId']);
    this.empReimbursementService.getEmployeeReimbursementById(rid).subscribe( response => {
      this.reimbursement = response;
    });
    if(sessionStorage.getItem('employeeType') !== 'Employee')
      this.showApproveDisapprove = true;
    else
      this.showApproveDisapprove = false;
  }

  public approve() {
    this.empReimbursementService.approveReimbursement(this.reimbursement.requesterId, this.reimbursement.reimbursementId);
  }

  public disapprove() {
    this.empReimbursementService.disapproveReimbursement(this.reimbursement.requesterId, this.reimbursement.reimbursementId);
  }

}
