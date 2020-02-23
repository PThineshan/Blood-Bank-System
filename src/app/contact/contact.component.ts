import { ContactService } from "./../services/contact.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { ViewChild, Component, OnInit } from "@angular/core";
import { ValidateService } from "../services/validate.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  @ViewChild("myForm", { static: false }) formValues;
  name: String;
  email: String;
  subject: String;
  message: String;
  constructor(
    private validationService: ValidateService,
    private messages: FlashMessagesService,
    private contactService: ContactService
  ) {}

  ngOnInit() {}

  onSubmit() {
    const contact = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };

    if (!this.validationService.validateContact(contact)) {
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

    this.contactService.submitContact(contact).subscribe(data => {
      console.log("Add contact details");
      if (data.success) {
        this.messages.show("Successfully send message!!", {
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
