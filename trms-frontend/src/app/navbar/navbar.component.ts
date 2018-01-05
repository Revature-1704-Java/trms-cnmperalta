import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    // if(this.isLoggedIn$ === undefined)
    //   this.isLoggedIn$ = this.loginService.isLoggedIn;
  }
}
