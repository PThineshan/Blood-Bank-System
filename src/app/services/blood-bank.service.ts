import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BloodBankService {
  constructor(private http: HttpClient) {}
  submitBloodBank(details): Observable<RegularResponse> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post("http://localhost:4000/admin/addBloodBank", details, {
      headers: headers
    }) as Observable<RegularResponse>;
  }
  getBloodBank(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get("http://localhost:4000/users/getBloodBank", {
      headers: headers
    }) as Observable<any>;
  }
}

interface RegularResponse {
  success: boolean;
  msg: string;
}
