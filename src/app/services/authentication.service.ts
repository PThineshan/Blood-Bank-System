import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  token: any;
  user: any;
  constructor(private http: HttpClient) {}

  registerUser(user): Observable<RegularResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
        //"Authorization": "my-auth-token"
      })
    };
    return this.http.post(
      "http://localhost:4000/users/register",
      user,
      httpOptions
    ) as Observable<RegularResponse>;
    //httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
  }

  authenticateUser(user): Observable<AuthenticateResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post(
      "http://localhost:4000/users/authenticate",
      user,
      httpOptions
    ) as Observable<AuthenticateResponse>;
  }

  getProfile() {
    // tslint:disable-next-line:prefer-const
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.loadToken()}`
    );
    // console.log(`Bearer ${this.loadToken()}`);
    // console.log('auth service');
    // headers.set('Content-Type', 'application/json');
    // console.log('auth service:' + headers.get('Authorization'));
    return this.http.get("http://localhost:4000/users/profile", {
      headers: headers
    }) as Observable<ProfileResponse>;
  }

  storeUserdata(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("username", user.username);
    localStorage.setItem("type", user.accountType);
    this.user = user;
    this.token = token;
  }

  loadToken() {
    const token = localStorage.getItem("id_token");
    this.token = token;
    // console.log(token);
    return token;
  }

  logOut() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn() {
    return !(localStorage.getItem("id_token") === null);
  }

  returnType() {
    return localStorage.getItem("type");
  }
}

interface RegularResponse {
  success: boolean;
  msg: string;
}

interface AuthenticateResponse {
  success: boolean;
  token: string;
  user: any;
  msg: string;
}

interface ProfileResponse {
  user: any;
}
