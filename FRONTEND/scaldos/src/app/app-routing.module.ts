import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { RecoveryComponent } from "./recovery/recovery.component";
import { HomeComponent } from "./home/home.component";
import { CreateGroupComponent } from "./create-group/create-group.component";
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "RegisterUser", component: RegisterComponent },
  { path: "Recovery", component: RecoveryComponent },
  { path: "CreateGroup", component: CreateGroupComponent },
  { path: "AddUser", component: AddUserComponent},
  { path: "Home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
