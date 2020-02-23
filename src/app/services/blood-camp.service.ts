import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BloodCampService {
  constructor(private http: HttpClient) {}
  submitBloodCamp(details): Observable<RegularResponse> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post("http://localhost:4000/admin/addBloodCamp", details, {
      headers: headers
    }) as Observable<RegularResponse>;
  }
  getBloodCamp(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get("http://localhost:4000/donors/getBloodCamp", {
      headers: headers
    }) as Observable<any>;
  }
}

interface RegularResponse {
  success: boolean;
  msg: string;
}
