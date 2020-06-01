import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../Model/user";
import { Observable } from "rxjs";
import { Recompensa } from "../Model/recompensa";

@Injectable({
  providedIn: "root",
})
export class RecompensasService {
  private headers: HttpHeaders;
  private accessPointUrl: string = "http://localhost:3500/recompensas";
  /* static instance:UserRegisterService; */
  private loginState = false;

  constructor(private http: HttpClient, private currentUser: User) {
    /*  UserRegisterService.instance = this; */
    this.headers = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
    });
  }

  public add(recompensa) {
    return this.http.post(
      this.accessPointUrl + "/nuevaRecompensa",
      recompensa,
      {
        headers: this.headers,
      }
    );
  }

  public obtenerRecompensas(): Observable<Recompensa> {
    return this.http.get<Recompensa>(
      this.accessPointUrl + "/obtenerRecompensas",
      {
        headers: this.headers,
      }
    );
  }
}
