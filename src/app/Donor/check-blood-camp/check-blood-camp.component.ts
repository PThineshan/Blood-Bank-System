import { ValidateService } from "src/app/services/validate.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { BloodCampService } from "./../../services/blood-camp.service";
import { ViewChild, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-check-blood-camp",
  templateUrl: "./check-blood-camp.component.html",
  styleUrls: ["./check-blood-camp.component.css"]
})
export class CheckBloodCampComponent implements OnInit {
  @ViewChild("myForm", { static: false }) formValues;
  details: any;
  selectedBloodCamp: any;
  district: String;

  constructor(
    private messages: FlashMessagesService,
    private bloodCampService: BloodCampService,
    private validateService: ValidateService
  ) {}

  ngOnInit() {}

  onSubmit() {
    var array = new Array();
    const district = this.district;

    if (!this.validateService.validateSelectDistrict(this.district)) {
      this.messages.show("You are not select a district", {
        cssClass: "alert-info",
        timeOut: 5000
      });
    } else {
      this.bloodCampService.getBloodCamp().subscribe(
        data => {
          this.details = data;
          for (let bloodCamp of data) {
            if (bloodCamp.district === district) {
              array.push(bloodCamp);
            }
          }

          this.selectedBloodCamp = array;

          if (array.length === 0) {
            this.messages.show(
              "There is no blood camp in your selected district",
              {
                cssClass: "alert-info",
                timeOut: 5000
              }
            );
          }
        },
        error => {
          console.log(error);
          return false;
        }
      );

      this.formValues.resetForm();
    }
  }
}
