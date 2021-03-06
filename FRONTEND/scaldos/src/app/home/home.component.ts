import { Component, OnInit } from "@angular/core";
import { UserService } from "../Services/user.service";
import { Router } from "@angular/router";
import { Menu } from "src/app/Model/Menu";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public showRegisterTeacher = false;
  public showCreateGroup = false;
  public showProfile = false;
  public showCharater = false;
  public showRecompensas = false;
  public showAddUser = false;

  public user;
  public menu: Menu;

  constructor(public userService: UserService, public router: Router) {
    this.user = userService.getUserName();
  }

  ngOnInit() {
    this.loadMenu();
  }

  public navigateComponent(componente) {
    this.showRegisterTeacher = false;
    this.showCreateGroup = false;
    this.showProfile = false;
    this.showCharater = false;
    this.showRecompensas = false;
    this.showAddUser = false;
    this.showProfile = false;
    this.showCharater = false;

    switch (componente) {
      case "CrearGrupo": {
        this.showCreateGroup = true;
        break;
      }
      case "AddUser": {
        this.showAddUser = true;
        break;
      }
      case "RegistrarProfesor": {
        this.showRegisterTeacher = true;
        break;
      }
      case "ActualizarDatos": {
        this.showProfile = true;
        break;
      }
      case "Character": {
        this.showCharater = true;
        break;
      }
      case "CrearRecompensas": {
        this.showRecompensas = true;
        break;
      }
    }
  }

  private loadMenu() {
    this.menu = new Menu();
    let rol = this.userService.getRol();
    console.log(rol);
    if (rol == "Admin") {
      this.menu.RegisterTeacher = true;
    }
    if (rol == "Teacher") {
      this.menu.CreateGroup = true;
      this.menu.Recompensas = true;
      this.menu.AddUser = true;
    }
    if (rol == "Student") {
      this.menu.CreateGroup = true;
    }
  }
  public signOut() {
    //this.userService.logOut();
    this.router.navigate(["/login"]);
  }
}
