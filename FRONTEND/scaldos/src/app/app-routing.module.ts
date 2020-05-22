import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { CreateGroupComponent } from "./create-group/create-group.component";
import { ProfileComponent } from "./profile/profile.component";
import { CharacterComponent } from "./character/character.component"; 


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "RegisterUser", component: RegisterComponent },
  { path: "CreateGroup", component: CreateGroupComponent },
  { path: "Home", component: HomeComponent },
  { path: "Prof", component: ProfileComponent },
  { path: "Character", component: CharacterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
