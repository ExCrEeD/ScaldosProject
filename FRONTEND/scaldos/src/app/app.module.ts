import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CharacterComponent } from "./character/character.component";
import { ProfileComponent } from "./profile/profile.component";

/* Modelos */
import { User } from "./Model/user";
import { Group } from "./Model/group";
import { Menu } from "./Model/Menu";
import { Recompensa } from "./Model/recompensa";

/* Servicios */
import { UserService } from "./Services/user.service";
import { GroupService } from "./Services/group.service";
import { NavPageService } from "./Services/nav-page.service";
import { CreateGroupComponent } from "./create-group/create-group.component";
import { HomeComponent } from "./home/home.component";
import { RecompensasComponent } from "./recompensas/recompensas.component";
import { RecompensasService } from "./Services/recompensas.service";
import { RecoveryComponent } from "./recovery/recovery.component";
import { AddUserComponent } from "./add-user/add-user.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateGroupComponent,
    HomeComponent,
    ProfileComponent,
    CharacterComponent,
    RecoveryComponent,
    RecompensasComponent,
    AddUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    User,
    Group,
    Menu,
    Recompensa,
    NavPageService,
    UserService,
    GroupService,
    RecompensasService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
