import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class GuardService {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate() {
    if (this.authenticationService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return true;
    }
  }
}
