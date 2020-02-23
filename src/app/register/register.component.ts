import { AuthenticationService } from "./../services/authentication.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ValidateService } from "../services/validate.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @ViewChild("myForm", { static: false }) formValues;
  firstName: String;
  lastName: String;
  accountType: String;
  email: String;
  dob: String;
  gender: String;
  address: String;
  city: String;
  phoneNo: String;
  username: String;
  password: String;
  bloodGroup: String;
  constructor(
    private validateService: ValidateService,
    private authService: AuthenticationService,
    private router: Router,
    private messages: FlashMessagesService
  ) {}

  ngOnInit() {}

  onRegisterSubmit() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      accountType: this.accountType,
      email: this.email,
      dob: this.dob,
      gender: this.gender,
      address: this.address,
      city: this.city,
      phoneNo: this.phoneNo,
      username: this.username,
      password: this.password,
      bloodGroup: this.bloodGroup
    };
    console.log("Register button pressed");

    // validating
    if (!this.validateService.validateRegister(user)) {
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

    if (!this.validateService.validateAge(this.accountType, this.dob)) {
      this.messages.show("You are not 17 years old, you can't donate blood", {
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

    // register user
    this.authService.registerUser(user).subscribe(data => {
      console.log("Trying to register");
      if (data.success) {
        this.messages.show("Successfully Registerd!! Now you can Login", {
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
