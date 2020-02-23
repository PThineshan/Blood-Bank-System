import { FlashMessagesService } from "angular2-flash-messages";
import { BloodRequestService } from "./../../services/blood-request.service";
import { BloodRequestInfoService } from "./../../services/blood-request-info.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-blood-transaction",
  templateUrl: "./blood-transaction.component.html",
  styleUrls: ["./blood-transaction.component.css"]
})
export class BloodTransactionComponent implements OnInit {
  requestList: any;
  status: String;
  id: String;
  constructor(
    private bloodRequestInfo: BloodRequestInfoService,
    private bloodRequestService: BloodRequestService,
    private messages: FlashMessagesService
  ) {}

  ngOnInit() {
    this.bloodRequestInfo.getInfo().subscribe(
      data => {
        this.requestList = data;
        console.log(data);
      },
      error => {
        console.log(error);
        return false;
      }
    );
  }

  onClick() {
    const status = {
      status: this.status,
      id: this.id
    };
    this.bloodRequestService.updateBloodRequest(status).subscribe(data => {
      console.log("Update the request");
      if (data.success) {
        console.log("Success........");
      } else {
        console.log(data);
        console.log("Something went wrong");
      }
    });
  }
}
