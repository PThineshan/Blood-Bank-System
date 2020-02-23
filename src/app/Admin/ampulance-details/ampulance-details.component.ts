import { AmpulanceService } from "./../../services/ampulance.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ViewChild, Component, OnInit } from "@angular/core";
import { ValidateService } from "src/app/services/validate.service";

@Component({
  selector: "app-ampulance-details",
  templateUrl: "./ampulance-details.component.html",
  styleUrls: ["./ampulance-details.component.css"]
})
export class AmpulanceDetailsComponent implements OnInit {
  @ViewChild("myForm", { static: false }) formValues;
  ampulanceId: String;
  regNo: String;
  driverName: String;
  address: String;
  phoneNo: String;
  description: String;
  constructor(
    private validationService: ValidateService,
    private messages: FlashMessagesService,
    private ampulanceService: AmpulanceService
  ) {}

  ngOnInit() {}
  onSubmit() {
    const ampulance = {
      ampulanceId: this.ampulanceId,
      regNo: this.regNo,
      driverName: this.driverName,
      address: this.address,
      phoneNo: this.phoneNo,
      description: this.description
    };

    if (!this.validationService.validateAmpulance(ampulance)) {
      this.messages.show("Fill in all fields", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    if (!this.validationService.validatePhoneNo(this.phoneNo)) {
      this.messages.show("Enter valid phone number", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    this.ampulanceService.submitAmpulance(ampulance).subscribe(data => {
      console.log("Add Ampulance details");
      if (data.success) {
        this.messages.show("Successfully Added!!", {
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
