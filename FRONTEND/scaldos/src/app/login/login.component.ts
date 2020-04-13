import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/Services/user.service";
import { Router } from "@angular/router";
import { User } from "src/app/Model/user";
import { NavPageService } from "../Services/nav-page.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private usrService: UserService,
    private router: Router,
    private currentUser: User,
    public tools: NavPageService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: ["", [Validators.required, Validators.email]],
      Password: ["", Validators.required],
    });
  }

  async loginValidate() {
    try {
      this.currentUser = <User>(
        await this.usrService.login(this.loginForm.value).toPromise()
      );
      this.usrService.setLoginInfo(this.currentUser);
      this.router.navigate(["/Home"]);
    } catch {
      alert("Usuario y/o contraseña incorrectos");
    }
  }
}
