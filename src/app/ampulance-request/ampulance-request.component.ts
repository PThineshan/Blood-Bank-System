import { FlashMessagesService } from "angular2-flash-messages";
import { AmpulanceService } from "./../services/ampulance.service";
import { ViewChild, Component, OnInit } from "@angular/core";
import { ValidateService } from "../services/validate.service";

@Component({
  selector: "app-ampulance-request",
  templateUrl: "./ampulance-request.component.html",
  styleUrls: ["./ampulance-request.component.css"]
})
export class AmpulanceRequestComponent implements OnInit {
  @ViewChild("myForm", { static: false }) formValues;
  ampulance: String;
  patient: String;
  address: String;
  charge: String;
  date: String;
  rtime: String;
  dtime: String;

  ampulanceDetails: any;
  constructor(
    private ampulanceService: AmpulanceService,
    private validationService: ValidateService,
    private messages: FlashMessagesService
  ) {}

  ngOnInit() {
    this.ampulanceService.getAmpulance().subscribe(
      data => {
        this.ampulanceDetails = data.details;
        console.log(data);
      },
      error => {
        console.log(error);
        return false;
      }
    );
  }

  onSubmit() {
    const request = {
      ampulance: this.ampulance,
      patient: this.patient,
      address: this.address,
      charge: this.charge,
      date: this.date,
      rtime: this.rtime,
      dtime: this.dtime
    };

    if (!this.validationService.validateAmpulanceRequest(request)) {
      this.messages.show("Fill in all fields", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    if (!this.validationService.validateBloodRequestDate(this.date)) {
      this.messages.show("Enter valid date", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    if (!this.validationService.validateCharge(this.charge)) {
      this.messages.show("Enter valid charge in dollors", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    if (!this.validationService.validateAmpulanceTime(this.dtime, this.rtime)) {
      this.messages.show("Enter valid dispatch time", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    this.ampulanceService.submitAmpulanceRequest(request).subscribe(data => {
      console.log("Add Ampulance Request");
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
