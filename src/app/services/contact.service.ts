import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(private http: HttpClient) {}

  submitContact(contact): Observable<RegularResponse> {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post("http://localhost:4000/users/addContact", contact, {
      headers: headers
    }) as Observable<RegularResponse>;
  }
}

interface RegularResponse {
  success: boolean;
  msg: string;
}
