import { BloodBankService } from "./../../services/blood-bank.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ValidateService } from "./../../services/validate.service";
import { ViewChild, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blood-bank",
  templateUrl: "./blood-bank.component.html",
  styleUrls: ["./blood-bank.component.css"]
})
export class BloodBankComponent implements OnInit {
  @ViewChild("myForm", { static: false }) formValues;
  bankName: String;
  hospitalName: String;
  district: String;
  address: String;
  email: String;
  phoneNo: String;
  fax: String;
  constructor(
    private validationService: ValidateService,
    private messages: FlashMessagesService,
    private bloodBankService: BloodBankService
  ) {}

  ngOnInit() {}
  onBloodBankSubmit() {
    const bloodBank = {
      bankName: this.bankName,
      hospitalName: this.hospitalName,
      district: this.district,
      address: this.address,
      email: this.email,
      phoneNo: this.phoneNo,
      fax: this.fax
    };

    if (!this.validationService.validateBloodBank(bloodBank)) {
      this.messages.show("Fill in all fields", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    if (!this.validationService.validateEmail(this.email)) {
      this.messages.show("Enter valid email", {
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

    this.bloodBankService.submitBloodBank(bloodBank).subscribe(data => {
      console.log("Add blood bank details");
      if (data.success) {
        this.messages.show("Successfully Registered!!", {
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
