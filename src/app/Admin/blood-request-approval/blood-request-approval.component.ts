import { ValidateService } from "./../../services/validate.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { BloodRequestService } from "./../../services/blood-request.service";
import { ViewChild, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blood-request-approval",
  templateUrl: "./blood-request-approval.component.html",
  styleUrls: ["./blood-request-approval.component.css"]
})
export class BloodRequestApprovalComponent implements OnInit {
  @ViewChild("myForm", { static: false }) formValues;

  status: String;
  requests: any;
  selectedRequest: any;

  constructor(
    private bloodRequestService: BloodRequestService,
    private messages: FlashMessagesService,
    private validateService: ValidateService
  ) {}

  ngOnInit() {
    this.bloodRequestService.getBloodRequest().subscribe(
      data => {
        this.requests = data.requests;
      },
      error => {
        console.log(error);
        return false;
      }
    );
  }

  onSelect(request: Request): void {
    console.log(request);
    this.selectedRequest = request;
    // console.log(this.selectedApplication);
  }

  onFormSubmit() {
    const updateRequest = {
      status: this.status,
      id: this.selectedRequest._id
    };

    if (!this.validateService.validateApproveRequest(this.status)) {
      this.messages.show("You must select a status category!!!", {
        cssClass: "alert-danger",
        timeOut: 5000
      });
      return false;
    }

    this.bloodRequestService
      .updateBloodRequest(updateRequest)
      .subscribe(data => {
        console.log("Update the request");
        if (data.success) {
          this.messages.show("Status updated successfully!!", {
            cssClass: "alert-success",
            timeOut: 5000
          });
          console.log("Successfully updated");
        } else {
          console.log(data);
          console.log("Something went wrong");
        }
      });

    this.formValues.resetForm();
  }
}

interface Request {
  patientName: String;
  bloodGroup: String;
  city: String;
  reqDate: String;
  email: String;
  phoneNo: String;
  hospitalName: String;
  address: String;
  purpose: String;
}
