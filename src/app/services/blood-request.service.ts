import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BloodRequestService {
  constructor(private http: HttpClient) {}

  submitBloodRequest(request): Observable<RegularResponse> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(
      "http://localhost:4000/appusers/bloodRequest",
      request,
      {
        headers: headers
      }
    ) as Observable<RegularResponse>;
  }

  updateBloodRequest(status): Observable<RegularResponse> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.put(
      "http://localhost:4000/admin/updateBloodRequest",
      status,
      {
        headers: headers
      }
    ) as Observable<RegularResponse>;
  }

  getBloodRequest(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get("http://localhost:4000/admin/bloodRequest", {
      headers: headers
    }) as Observable<any>;
  }
}

interface RegularResponse {
  success: boolean;
  msg: string;
}
