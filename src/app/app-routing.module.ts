import { AmpulanceRequestListComponent } from "./ampulance-request-list/ampulance-request-list.component";
import { AmpulanceRequestComponent } from "./ampulance-request/ampulance-request.component";
import { AmpulanceListComponent } from "./Admin/ampulance-list/ampulance-list.component";
import { AmpulanceDetailsComponent } from "./Admin/ampulance-details/ampulance-details.component";
import { ContactComponent } from "./contact/contact.component";
import { CheckBloodCampComponent } from "./Donor/check-blood-camp/check-blood-camp.component";

import { BloodCampComponent } from "./Admin/blood-camp/blood-camp.component";
import { BloodBankComponent } from "./Admin/blood-bank/blood-bank.component";
import { BloodRequestApprovalComponent } from "./Admin/blood-request-approval/blood-request-approval.component";
import { BloodTransactionComponent } from "./Admin/blood-transaction/blood-transaction.component";
import { BloodRequestComponent } from "./User/blood-request/blood-request.component";
import { DisplayDonorComponent } from "./User/display-donor/display-donor.component";
import { DonorGuardService } from "./services/donor-guard.service";
import { AdminProfileComponent } from "./Admin/admin-profile/admin-profile.component";
import { DonorProfileComponent } from "./Donor/donor-profile/donor-profile.component";
import { UserProfileComponent } from "./User/user-profile/user-profile.component";
import { AboutComponent } from "./about/about.component";
import { AdminComponent } from "./Admin/admin/admin.component";
import { AdminGuardService } from "./services/admin-guard.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DonorComponent } from "./Donor/donor/donor.component";
import { UserComponent } from "./User/user/user.component";
import { GuardService } from "./services/guard.service";
import { UserGuardService } from "./services/user-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AdminGuardService]
  },
  {
    path: "admin-profile",
    component: AdminProfileComponent,
    canActivate: [AdminGuardService]
  },

  {
    path: "donor",
    component: DonorComponent,
    canActivate: [DonorGuardService]
  },
  {
    path: "donor-profile",
    component: DonorProfileComponent,
    canActivate: [DonorGuardService]
  },
  { path: "login", component: LoginComponent },
  { path: "user", component: UserComponent, canActivate: [UserGuardService] },
  {
    path: "user-profile",
    component: UserProfileComponent,
    canActivate: [UserGuardService]
  },
  { path: "about", component: AboutComponent },
  {
    path: "donor-details",
    component: DisplayDonorComponent,
    canActivate: [UserGuardService]
  },
  { path: "blood-request", component: BloodRequestComponent },
  { path: "blood-transaction", component: BloodTransactionComponent },
  {
    path: "blood-approval",
    component: BloodRequestApprovalComponent,
    canActivate: [AdminGuardService]
  },
  {
    path: "blood-bank",
    component: BloodBankComponent,
    canActivate: [AdminGuardService]
  },
  {
    path: "blood-camp",
    component: BloodCampComponent,
    canActivate: [AdminGuardService]
  },
  { path: "check-blood-camp", component: CheckBloodCampComponent },
  { path: "contact", component: ContactComponent },
  { path: "ampulance-detail", component: AmpulanceDetailsComponent },
  { path: "ampulance-list", component: AmpulanceListComponent },
  { path: "ampulance-request", component: AmpulanceRequestComponent },
  { path: "ampulance-request-list", component: AmpulanceRequestListComponent },

  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
