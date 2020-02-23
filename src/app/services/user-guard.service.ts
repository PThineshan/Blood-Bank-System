import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class UserGuardService {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate() {
    if (this.authenticationService.returnType() === "User") {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return true;
    }
  }
}
