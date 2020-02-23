import { AmpulanceService } from "./../../services/ampulance.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ampulance-list",
  templateUrl: "./ampulance-list.component.html",
  styleUrls: ["./ampulance-list.component.css"]
})
export class AmpulanceListComponent implements OnInit {
  ampulanceDetails: any;
  constructor(private ampulanceService: AmpulanceService) {}

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
}
