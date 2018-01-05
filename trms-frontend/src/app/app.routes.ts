import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EmpReimbursementViewComponent } from './emp-reimbursement-view/emp-reimbursement-view.component';
import { NewReimbursementComponent } from './new-reimbursement/new-reimbursement.component';
import { LogoutComponent } from './logout/logout.component';
import { EmpReimbursementDetailComponent } from './emp-reimbursement-detail/emp-reimbursement-detail.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'new-reimbursement', component: NewReimbursementComponent },
  { path: 'emp-reimbursement-view', component: EmpReimbursementViewComponent },
  { path: 'emp-reimbursement/:reimbursementId', component: EmpReimbursementDetailComponent }
];

export const routing = RouterModule.forRoot(routes);