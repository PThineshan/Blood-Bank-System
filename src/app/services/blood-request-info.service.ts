import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BloodRequestInfoService {
  constructor(private http: HttpClient) {}

  getInfo(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get("http://localhost:4000/admin/getBloodRequests", {
      headers: headers
    }) as Observable<any>;
  }
}
