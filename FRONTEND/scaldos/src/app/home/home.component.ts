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
  public showProfile=false;
  public showCharater = false; 

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
    this.showProfile= false;
    this.showCharater=false; 

    switch (componente) {
      case "CrearGrupo": {
        this.showCreateGroup = true;
        break;
      }
      case "RegistrarProfesor": {
        this.showRegisterTeacher = true;
        break;
      }
      case "Prof":{
        this.showProfile = true;
        break;
      }
      case "Character":{
        this.showCharater = true;
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
    }
  }
  public signOut() {
    //this.userService.logOut();
    this.router.navigate(["/login"]);
  }
}
