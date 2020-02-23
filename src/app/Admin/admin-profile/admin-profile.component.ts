import { AuthenticationService } from "./../../services/authentication.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-profile",
  templateUrl: "./admin-profile.component.html",
  styleUrls: ["./admin-profile.component.css"]
})
export class AdminProfileComponent implements OnInit {
  user = {};
  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.getProfile().subscribe(
      profile => {
        this.user = profile.user;
      },
      error => {
        console.log(error);
        return false;
      }
    );
  }
}
