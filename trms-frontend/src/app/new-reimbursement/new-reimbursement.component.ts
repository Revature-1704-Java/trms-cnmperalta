import { Component, OnInit } from '@angular/core';
import { GradingFormatService } from '../shared/grading-format.service';
import { EventTypeService } from '../shared/event-type.service';
import { LoginService } from '../shared/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-reimbursement',
  templateUrl: './new-reimbursement.component.html',
  styleUrls: ['./new-reimbursement.component.css']
})
export class NewReimbursementComponent implements OnInit {
  public gradingFormats;
  public eventTypes;

  // form data
  public eventName: string;
  public eventType: string;
  public gradingFormat: string;
  public startDate: string;
  public cost: string;
  public description: string;
  public justification: string;
  public streetAddress1: string;
  public streetAddress2: string;
  public city: string;
  public state: string;
  public zipCode: string;
  public country: string;
  public amountRequest: string;
  public addInfo: string;

  constructor(private router: Router, private loginService: LoginService, private gradingFormatService: GradingFormatService, private eventTypeService: EventTypeService) { }

  ngOnInit() {
    if(sessionStorage.getItem('loggedIn') === null || sessionStorage.getItem('loggedIn') === 'false')
      this.router.navigateByUrl('login');
    this.gradingFormatService.getGradingFormats().subscribe(gradingFormats => {
      this.gradingFormats = gradingFormats;
    });
    this.eventTypeService.getEventTypes().subscribe(eventTypes => {
      this.eventTypes = eventTypes;
    });
  }

  public async addReimbursement() {
    let dataJson = {
      'employeeId': parseInt(sessionStorage.getItem('employeeID')),
      'supervisorId': parseInt(sessionStorage.getItem('directSupervisorID')),
      'departmentHeadId': parseInt(sessionStorage.getItem('departmentHeadID')),
      'eventName' : this.eventName,
      'eventType' : this.eventType,
      'gradingFormat' : this.gradingFormat,
      'startDate' : this.startDate,
      'cost' : this.cost,
      'description' : this.description,
      'justification' : this.justification,
      'streetAddress1' : this.streetAddress1,
      'streetAddress2' : this.streetAddress2,
      'city' : this.city,
      'state' : this.state,
      'zipCode' : this.zipCode,
      'country' : this.country,
      'amountRequest' : this.amountRequest,
      'addInfo' : this.addInfo
    };
    
    try {
      let response = await fetch(
        'http://localhost:8082/TRMS/new-reimbursement',
        {
          method: 'POST',
          body: JSON.stringify(dataJson),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if(response.ok) {
        this.router.navigateByUrl('emp-reimbursement-view');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
