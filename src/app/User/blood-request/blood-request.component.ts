import { BloodRequestService } from "./../../services/blood-request.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ValidateService } from "./../../services/validate.service";
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-blood-request",
  templateUrl: "./blood-request.component.html",
  styleUrls: ["./blood-request.component.css"]
})
export class BloodRequestComponent implements OnInit {
  @ViewChild("myForm", { static: false }) formValues;

  patientName: String;
  bloodGroup: String;
  city: String;
  reqDate: String;
  email: String;
  phoneNo: String;
  hospitalName: String;
  address: String;
  purpose: String;

  constructor(
    private validateService: ValidateService,
    private messages: FlashMessagesService,
    private bloodRequestService: BloodRequestService
  ) {}

  ngOnInit() {}

  onBloodRequestSubmit() {
    const bloodRequest = {
      patientName: this.patientName,
      bloodGroup: this.bloodGroup,
      city: this.city,
      reqDate: this.reqDate,
      email: this.email,
      phoneNo: this.phoneNo,
      hospitalName: this.hospitalName,
      address: this.address,
      purpose: this.purpose
    };
    console.log("Requeest button pressed");

    if (!this.validateService.validateBloodRequest(bloodRequest)) {
      this.messages.show("Fill in all fields", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    if (!this.validateService.validateEmail(this.email)) {
      this.messages.show("Enter valid email", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    if (!this.validateService.validatePhoneNo(this.phoneNo)) {
      this.messages.show("Enter valid phone number", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    if (!this.validateService.validateBloodRequestDate(this.reqDate)) {
      this.messages.show("Enter valid required date", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    this.bloodRequestService
      .submitBloodRequest(bloodRequest)
      .subscribe(data => {
        console.log("Trying to request");
        if (data.success) {
          this.messages.show("Successfully Requested!!", {
            cssClass: "alert-success",
            timeOut: 5000
          });
        } else {
          console.log(data);
          console.log("Something went wrong");
        }
      });

    this.formValues.resetForm();
  }
}
