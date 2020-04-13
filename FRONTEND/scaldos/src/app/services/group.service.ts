import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Group } from "../Model/group";

@Injectable({
  providedIn: "root"
})
export class GroupService {
  private headers: HttpHeaders;
  private accessPointUrl: string = "http://localhost:3500/groups";
  /* static instance:UserRegisterService; */

  constructor(private http: HttpClient, private currentUser: Group) {
    /*  UserRegisterService.instance = this; */
    this.headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    });
  }

  public add(group) {
    return this.http.post(this.accessPointUrl + "/newGroup", group, {
      headers: this.headers
    });
  }
}