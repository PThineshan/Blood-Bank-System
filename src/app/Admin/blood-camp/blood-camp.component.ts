import { BloodCampService } from "./../../services/blood-camp.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ViewChild, Component, OnInit } from "@angular/core";
import { ValidateService } from "src/app/services/validate.service";

@Component({
  selector: "app-blood-camp",
  templateUrl: "./blood-camp.component.html",
  styleUrls: ["./blood-camp.component.css"]
})
export class BloodCampComponent implements OnInit {
  @ViewChild("myForm", { static: false }) formValues;

  district: String;
  address: String;
  date: String;
  time: String;

  constructor(
    private validationService: ValidateService,
    private messages: FlashMessagesService,
    private bloodBankService: BloodCampService
  ) {}

  ngOnInit() {}
  onBloodCampSubmit() {
    const bloodCamp = {
      district: this.district,
      address: this.address,
      date: this.date,
      time: this.time
    };

    if (!this.validationService.validateBloodCamp(bloodCamp)) {
      this.messages.show("Fill in all fields", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    if (!this.validationService.validateBloodCampDate(this.date)) {
      this.messages.show("Enter valid blood camp date", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    this.bloodBankService.submitBloodCamp(bloodCamp).subscribe(data => {
      console.log("Add blood camp details");
      if (data.success) {
        this.messages.show("Successfully added blood camp details!!", {
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
