import { AuthenticationService } from "./../../services/authentication.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-donor-profile",
  templateUrl: "./donor-profile.component.html",
  styleUrls: ["./donor-profile.component.css"]
})
export class DonorProfileComponent implements OnInit {
  user = {};
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authenticationService.getProfile().subscribe(
      profile => {
        // console.log(profile.user);
        this.user = profile.user;
      },
      error => {
        console.log(error);
        return false;
      }
    );
  }
}
