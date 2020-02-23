import { AmpulanceService } from "./services/ampulance.service";
import { ContactService } from "./services/contact.service";
import { BloodCampService } from "./services/blood-camp.service";
import { BloodBankService } from "./services/blood-bank.service";
import { BloodRequestInfoService } from "./services/blood-request-info.service";
import { UserGuardService } from "./services/user-guard.service";
import { AdminGuardService } from "./services/admin-guard.service";

import { ValidateService } from "./services/validate.service";
import { AuthenticationService } from "./services/authentication.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { Ng2SearchPipeModule } from "ng2-search-filter";
//import { DataTableModule } from "angular7-data-table";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { BsNavbarComponent } from "./bs-navbar/bs-navbar.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from "angular2-flash-messages";
import { GuardService } from "./services/guard.service";
import { AdminComponent } from "./Admin/admin/admin.component";
import { AdminSidebarComponent } from "./Admin/admin-sidebar/admin-sidebar.component";
import { UserComponent } from "./User/user/user.component";
import { DonorComponent } from "./Donor/donor/donor.component";
import { AboutComponent } from "./about/about.component";
import { UserSidebarComponent } from "./User/user-sidebar/user-sidebar.component";
import { DonorSidebarComponent } from "./Donor/donor-sidebar/donor-sidebar.component";
import { UserProfileComponent } from "./User/user-profile/user-profile.component";
import { DonorProfileComponent } from "./Donor/donor-profile/donor-profile.component";
import { AdminProfileComponent } from "./Admin/admin-profile/admin-profile.component";
import { DonorGuardService } from "./services/donor-guard.service";
import { DisplayDonorComponent } from "./User/display-donor/display-donor.component";
import { DonorInfoService } from "./services/donor-info.service";
import { BloodRequestComponent } from "./User/blood-request/blood-request.component";
import { BloodTransactionComponent } from "./Admin/blood-transaction/blood-transaction.component";
import { BloodRequestApprovalComponent } from "./Admin/blood-request-approval/blood-request-approval.component";
import { BloodBankComponent } from "./Admin/blood-bank/blood-bank.component";
import { BloodCampComponent } from "./Admin/blood-camp/blood-camp.component";
import { CheckBloodCampComponent } from "./Donor/check-blood-camp/check-blood-camp.component";
import { ContactComponent } from "./contact/contact.component";
import { AmpulanceDetailsComponent } from "./Admin/ampulance-details/ampulance-details.component";
import { AmpulanceListComponent } from "./Admin/ampulance-list/ampulance-list.component";
import { AmpulanceRequestComponent } from "./ampulance-request/ampulance-request.component";
import { AmpulanceRequestListComponent } from "./ampulance-request-list/ampulance-request-list.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    BsNavbarComponent,
    PageNotFoundComponent,
    AdminComponent,
    AdminSidebarComponent,
    UserComponent,
    DonorComponent,
    AboutComponent,
    UserSidebarComponent,
    DonorSidebarComponent,
    UserProfileComponent,
    DonorProfileComponent,
    AdminProfileComponent,
    DisplayDonorComponent,
    BloodRequestComponent,
    BloodTransactionComponent,
    BloodRequestApprovalComponent,
    BloodBankComponent,
    BloodCampComponent,
    CheckBloodCampComponent,
    ContactComponent,
    AmpulanceDetailsComponent,
    AmpulanceListComponent,
    AmpulanceRequestComponent,
    AmpulanceRequestListComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    AdminGuardService,
    UserGuardService,
    DonorGuardService,
    AuthenticationService,
    GuardService,
    ValidateService,
    DonorInfoService,
    BloodRequestInfoService,
    BloodBankService,
    BloodCampService,
    ContactService,
    AmpulanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
