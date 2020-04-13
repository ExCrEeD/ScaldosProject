import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

/* Modelos */
import { User } from "./Model/user";
import { Group } from "./Model/group";
/* Servicios */
import { UserService } from "./Services/user.service";
import { GroupService } from "./Services/group.service";
import { NavPageService } from "./Services/nav-page.service";
import { CreateGroupComponent } from './create-group/create-group.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, CreateGroupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [User, Group, NavPageService, UserService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule {}
