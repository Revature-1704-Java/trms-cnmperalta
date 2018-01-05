import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { routing } from './app.routes';
import { EmpReimbursementViewComponent } from './emp-reimbursement-view/emp-reimbursement-view.component';
import { NewReimbursementComponent } from './new-reimbursement/new-reimbursement.component';
import { GradingFormatService } from './shared/grading-format.service';
import { EventTypeService } from './shared/event-type.service';
import { LoginService } from './shared/login.service';
import { LogoutComponent } from './logout/logout.component';
import { EmpReimbursementDetailComponent } from './emp-reimbursement-detail/emp-reimbursement-detail.component';
import { EmpReimbursementService } from './shared/emp-reimbursement.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    CreateAccountComponent,
    ChangePasswordComponent,
    EmpReimbursementViewComponent,
    NewReimbursementComponent,
    LogoutComponent,
    EmpReimbursementDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [GradingFormatService, EventTypeService, LoginService, EmpReimbursementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
