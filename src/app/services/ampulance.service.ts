import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AmpulanceService {
  constructor(private http: HttpClient) {}
  submitAmpulance(details): Observable<RegularResponse> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post("http://localhost:4000/admin/addAmpulance", details, {
      headers: headers
    }) as Observable<RegularResponse>;
  }
  getAmpulance(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get("http://localhost:4000/admin/getAmpulance", {
      headers: headers
    }) as Observable<any>;
  }

  submitAmpulanceRequest(request): Observable<RegularResponse> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post(
      "http://localhost:4000/admin/addAmpulanceRequest",
      request,
      {
        headers: headers
      }
    ) as Observable<RegularResponse>;
  }
  getAmpulanceRequest(): Observable<any> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.get("http://localhost:4000/admin/getAmpulanceRequest", {
      headers: headers
    }) as Observable<any>;
  }
}

interface RegularResponse {
  success: boolean;
  msg: string;
}
