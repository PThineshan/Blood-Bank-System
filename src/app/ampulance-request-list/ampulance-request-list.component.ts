import { AmpulanceService } from "./../services/ampulance.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ampulance-request-list",
  templateUrl: "./ampulance-request-list.component.html",
  styleUrls: ["./ampulance-request-list.component.css"]
})
export class AmpulanceRequestListComponent implements OnInit {
  ampulanceRequests: any;
  constructor(private ampulanceService: AmpulanceService) {}

  ngOnInit() {
    this.ampulanceService.getAmpulanceRequest().subscribe(
      data => {
        this.ampulanceRequests = data.requests;
        console.log(data);
      },
      error => {
        console.log(error);
        return false;
      }
    );
  }
}
