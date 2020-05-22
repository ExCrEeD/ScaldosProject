import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class EmailService{
    private headers: HttpHeaders;
    private accessPointUrl: string = "http://localhost:3500/mail";

    constructor(private http: HttpClient) {
        /*  UserRegisterService.instance = this; */
        this.headers = new HttpHeaders({
          "Content-Type": "application/json; charset=utf-8"
        });
    }

    public send(mail) {
      return this.http.post(this.accessPointUrl + "/sendMail", mail, {
        headers: this.headers,
      });
    }
}

