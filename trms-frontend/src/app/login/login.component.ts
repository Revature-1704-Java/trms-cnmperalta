import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public wrongCredentialsMessage:string;
  public emailAddress:string;
  public password:string;
  constructor(private loginService: LoginService, private router:  Router) { }

  ngOnInit() {
    if(sessionStorage.getItem('loggedIn') === 'true')
      this.router.navigateByUrl('/emp-reimbursement-view');
  }

  public sendLogin() {
    this.loginService.doLogin(this.emailAddress, this.password).subscribe(response => {
      if(response['employeeId'] === 0) {
        this.wrongCredentialsMessage = "Wrong email address or password."
      } else {
        if(response['lastLogin'] === null) {
          this.router.navigateByUrl('/change-password');
        }
        else if(response['loggedIn'] === true) {
          this.router.navigateByUrl('/emp-reimbursement-view');
        } 
        else {
          alert('Invalid credentials.');
        }
      }
    });
  }
}

