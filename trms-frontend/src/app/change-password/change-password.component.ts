import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  public newPassword: string;
  public confirmNewPassword: string;
  public newPasswordErrorMessage: string;

  constructor(private loginService:LoginService, private router: Router) { }

  ngOnInit() {
  }

  public async updatePassword() {
    this.newPasswordErrorMessage = "";
    if(this.newPassword === this.confirmNewPassword) {
      try {
        let response = await fetch(
          "http://localhost:8082/TRMS/change-password",
          {
            method: 'POST',
            body: JSON.stringify({
              "employeeId" : parseInt(sessionStorage.getItem('employeeID')),
              "password": this.newPassword
            }),
            headers: {
              "Content-type": "application/json"
            }
          }
        );
  
        if(response.ok) {
          let jsonResponse = await response.json();
          if(jsonResponse['loggedIn'] === true) {
            sessionStorage.setItem('loggedIn', 'true');
            this.router.navigateByUrl('/emp-reimbursement-view');
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    else {
      this.newPasswordErrorMessage = "Passwords do not match."
    }
  }
}
