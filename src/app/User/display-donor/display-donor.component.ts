import { DonorInfoService } from "./../../services/donor-info.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-display-donor",
  templateUrl: "./display-donor.component.html",
  styleUrls: ["./display-donor.component.css"]
})
export class DisplayDonorComponent implements OnInit {
  donorList: any;
  constructor(private infoService: DonorInfoService) {}

  ngOnInit() {
    this.infoService.getInfo().subscribe(
      data => {
        this.donorList = data;
        console.log(data);
      },
      error => {
        console.log(error);
        return false;
      }
    );
  }
}
